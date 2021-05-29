package com.demo.auction.image;

import java.util.List;

import org.springframework.core.io.Resource;

public interface IImageService {
	
	public List<ImageMetaData> addUpdateCompressedImage(Long productId, List<Object> file);
	
	public Resource retrieveImage(Long imageId);
	
	public Boolean deleteImage(Long imageId);
	
	public void udpateImage(Long imageId, Boolean thumbNail, Boolean active);
	
}
