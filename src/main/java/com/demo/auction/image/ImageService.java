package com.demo.auction.image;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

import javax.imageio.IIOImage;
import javax.imageio.ImageIO;
import javax.imageio.ImageWriteParam;
import javax.imageio.ImageWriter;
import javax.imageio.stream.ImageOutputStream;
import javax.transaction.Transactional;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;
import org.springframework.web.multipart.MultipartFile;

import com.demo.auction.product.Product;
import com.demo.auction.product.ProductDao;

@Service
@PropertySource("classpath:auctionUtils.properties")
public class ImageService implements IImageService {

	@Value("${file.path}")
	private String filePath;
	@Autowired
	private ProductDao productDao;
	@Autowired
	private ImageMetaDataDao imageMetaDataDao;

	@Override
	@Transactional
	public List<ImageMetaData> addUpdateCompressedImage(Long productId, List<Object> file) {
		List<ImageMetaData> imageMetaDataList = new LinkedList<ImageMetaData>();
		for (int i = 0; i < file.size(); i++) {
			MultipartFile eachMultiPartFile = (MultipartFile) file.get(i);
			String fileExtension = FilenameUtils.getExtension((eachMultiPartFile).getOriginalFilename());
			Optional<Product> productOptional = productDao.findById(productId);
			Product product = null;
			ImageMetaData imageMetaData = null;
			if (productOptional.isPresent()) {
				product = productOptional.get();
				imageMetaData = new ImageMetaData();
				imageMetaData.setActive(Boolean.TRUE);
				if (i == 0) {
					imageMetaData.setThumbNail(Boolean.TRUE);
				} else {
					imageMetaData.setThumbNail(Boolean.FALSE);
				}
				imageMetaData.setProduct(product);
				imageMetaDataDao.saveAndFlush(imageMetaData);
				imageMetaData.setFilePath(filePath + imageMetaData.getId() + "." + fileExtension);
				imageMetaDataList.add(imageMetaData);
			}
			try {
				File convFile = new File((eachMultiPartFile).getOriginalFilename());
				convFile.createNewFile();
				FileOutputStream fos = new FileOutputStream(convFile);
				fos.write((eachMultiPartFile).getBytes());
				fos.close();
				BufferedImage image = ImageIO.read(convFile);

				File output = new File(imageMetaData.getFilePath());
				OutputStream out = new FileOutputStream(output);

				ImageWriter writer = ImageIO.getImageWritersByFormatName("jpg").next();
				ImageOutputStream ios = ImageIO.createImageOutputStream(out);
				writer.setOutput(ios);

				ImageWriteParam param = writer.getDefaultWriteParam();
				if (param.canWriteCompressed()) {
					param.setCompressionMode(ImageWriteParam.MODE_EXPLICIT);
					param.setCompressionQuality(0.1f);
				}

				writer.write(null, new IIOImage(image, null, null), param);
				out.close();
				ios.close();
				writer.dispose();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return imageMetaDataList;
	}

	@Override
	@Transactional
	public Resource retrieveImage(Long imageId) {

		Optional<ImageMetaData> imageMetaDataOptional = imageMetaDataDao.findById(imageId);
		ImageMetaData imageMetaData = null;
		if (imageMetaDataOptional.isPresent()) {
			imageMetaData = imageMetaDataOptional.get();
		}

		File file = null;
		Resource fileSystemResource = null;
		try {
			file = ResourceUtils.getFile(imageMetaData.getFilePath());
			fileSystemResource = new FileSystemResource(file);
			//assign default image
			if(!file.exists()){
				file = ResourceUtils.getFile("C:/Users/surya vikram/AppData/Local/Temp/images/13.jfif");
				fileSystemResource = new FileSystemResource(file);
				System.out.println(" In File Found : " + file.exists());
			}
			// File is found
			System.out.println("File Found : " + file.exists());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return fileSystemResource;
	}

	@Override
	@Transactional
	public Boolean deleteImage(Long imageId) {
		Boolean isDeleted = Boolean.TRUE;
		try {
			Optional<ImageMetaData> imageMetaDataOptional = imageMetaDataDao.findById(imageId);
			ImageMetaData imageMetaData = null;
			if (imageMetaDataOptional.isPresent()) {
				imageMetaData = imageMetaDataOptional.get();
				imageMetaData.setActive(Boolean.FALSE);
				imageMetaData.setThumbNail(Boolean.FALSE);
				imageMetaDataDao.save(imageMetaData);
				if (imageMetaData.getThumbNail() == Boolean.TRUE) {
					Optional<Product> productOptional = productDao.findById(imageMetaData.getProduct().getId());
					if (productOptional.isPresent()) {
						Product product = productOptional.get();
						product.getImageMetaData().get(0).setThumbNail(Boolean.TRUE);
						productDao.save(product);
					}
				}
			}
			// File file = ResourceUtils.getFile(imageMetaData.getFilePath());
			// if (file.delete()) {
			// System.out.println("File deleted successfully");
			// } else {
			// System.out.println("Failed to delete the file");
			// isDeleted = Boolean.FALSE;
			// }
			// imageMetaDataDao.deleteById(imageId);

		} catch (Exception e) {
			e.printStackTrace();
			isDeleted = Boolean.FALSE;
		}
		return isDeleted;
	}

	@Override
	@Transactional
	public void udpateImage(Long imageId, Boolean thumbNail, Boolean active) {
		Optional<ImageMetaData> imageMetaDataOptional = imageMetaDataDao.findById(imageId);
		ImageMetaData imageMetaData = null;
		if (thumbNail == Boolean.TRUE) {
			if (imageMetaDataOptional.isPresent()) {
				imageMetaData = imageMetaDataOptional.get();
			}
			for (ImageMetaData tempImageMetaData : imageMetaData.getProduct().getImageMetaData()) {
				tempImageMetaData.setThumbNail(Boolean.FALSE);
				imageMetaDataDao.save(tempImageMetaData);
			}
		}
		imageMetaData.setThumbNail(thumbNail);
		imageMetaData.setActive(active);
		imageMetaDataDao.save(imageMetaData);
	}
}
