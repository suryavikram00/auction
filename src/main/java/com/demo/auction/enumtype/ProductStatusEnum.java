package com.demo.auction.enumtype;

public enum ProductStatusEnum {
	
	ACTIVE(1), INACTIVE(2);
	
	private int type;
	
	ProductStatusEnum(int type){
		this.type = type;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}
	
}
