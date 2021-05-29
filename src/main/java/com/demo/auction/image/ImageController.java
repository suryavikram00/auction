package com.demo.auction.image;

import java.awt.image.BufferedImage;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.imageio.IIOImage;
import javax.imageio.ImageIO;
import javax.imageio.ImageWriteParam;
import javax.imageio.ImageWriter;
import javax.imageio.stream.ImageOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.demo.auction.product.Product;
import com.demo.auction.product.ProductService;
import com.demo.auction.utils.JsonResponse;

@RestController
@PropertySource("classpath:auctionUtils.properties")
@CrossOrigin(origins = "http://localhost:4200")
public class ImageController {

	@Value("${file.path}")
	private String filePath;
	@Autowired
	private IImageService imageService;
	@Autowired
	private ProductService productService;

	@PostMapping(value = "/add-image")
	@ResponseBody
	@Deprecated
	public JsonResponse<Object> addImage(@RequestParam("file") MultipartFile[] file,
			@RequestParam("productId") Long productId, HttpServletRequest httpServletRequest,
			HttpServletResponse httpServletResponse) {
		JsonResponse<Object> jsonResponse = new JsonResponse<>();
		// for (MultipartFile eachFile : file) {
		// String fileExtension =
		// FilenameUtils.getExtension(eachFile.getOriginalFilename());
		// ImageMetaData imageMetaData =
		// imageService.addUpdateCompressedImage(productId, fileExtension);
		// jsonResponse.setResult(imageMetaData);
		// System.out.println(filePath + " " + imageMetaData.getFilePath());
		// try {
		// byte barr[] = eachFile.getBytes();
		// BufferedOutputStream bout = new BufferedOutputStream(new
		// FileOutputStream(imageMetaData.getFilePath()));
		// bout.write(barr);
		// bout.flush();
		// bout.close();
		// } catch (Exception e) {
		// System.out.println(e);
		// }
		// }
		return jsonResponse;
	}

	@PostMapping(value = "/add-image-compressed")
	@ResponseBody
	public JsonResponse<Object> addCompressedImage(@RequestParam("file") MultipartFile[] file,
			@RequestParam Long productId, HttpServletRequest httpServletRequest,
			HttpServletResponse httpServletResponse) {
		JsonResponse<Object> jsonResponse = new JsonResponse<>();
		try {
			List<ImageMetaData> imageMetaData = imageService.addUpdateCompressedImage(productId, Arrays.asList(file));
			for (ImageMetaData tempImageMetaData : imageMetaData) {
				tempImageMetaData.setProduct(null);
			}
			jsonResponse.setResult(imageMetaData);
			jsonResponse.setMessage("Images have been successfully uploaded");
			jsonResponse.setSuccess(Boolean.TRUE);
			jsonResponse.setResponseCode(200);
		} catch (Exception e) {
			e.printStackTrace();
			jsonResponse.setSuccess(Boolean.FALSE);
			jsonResponse.setMessage("Cannot upload image!");
			jsonResponse.setResponseCode(500);
		}
		return jsonResponse;
	}

	@GetMapping(value = "/retrieve-image/{imageid}")
	@ResponseBody
	public ResponseEntity<Resource> retrieveImage(@PathVariable(name = "imageid") Long imageId,
			HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {
		File file = null;
		Resource fileSystemResource = imageService.retrieveImage(imageId);
		return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(fileSystemResource);
	}

	@GetMapping(value = "/delete-image/{imageid}")
	@ResponseBody
	public JsonResponse<Object> deleteImage(@PathVariable(name = "imageid") Long imageId,
			HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {
		JsonResponse<Object> jsonResponse = new JsonResponse<>();
		if (imageService.deleteImage(imageId)) {
			jsonResponse.setSuccess(Boolean.TRUE);
			jsonResponse.setMessage("Successfully deleted image with id :: " + imageId);
		} else {
			jsonResponse.setSuccess(Boolean.FALSE);
			jsonResponse.setMessage("Cannot delete image with id :: " + imageId);
		}
		return jsonResponse;
	}

	@GetMapping(value = "/update-image/{imageid}/thumbnail/{thumbnail}/active/{active}")
	@ResponseBody
	public JsonResponse<Object> updateThumbNail(@PathVariable(name = "imageid") Long imageId,
			@PathVariable(name = "thumbnail") Boolean thumbnail,
			@PathVariable(name = "active") Boolean active,
			HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {
		JsonResponse<Object> jsonResponse = new JsonResponse<>();
		try {
			imageService.udpateImage(imageId, thumbnail, active);
			jsonResponse.setMessage("ThumbNail is updated for Image Id :: " + imageId);
			jsonResponse.setSuccess(Boolean.TRUE);
		} catch (Exception e) {
			e.printStackTrace();
			jsonResponse.setMessage("Cannot update thumbnail for Image Id :: " + imageId);
			jsonResponse.setSuccess(Boolean.FALSE);
		}
		return jsonResponse;
	}

}
