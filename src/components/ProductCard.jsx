import React from 'react';
import { AddToCartBtn, ProductImage, ProductName, ProductPrice, StyledCardWrapper } from '../Styles/ProductCard.style';

const ProductCard = ({ product }) => {
	return (
		<StyledCardWrapper>
			<ProductImage src={product.image} />
			<ProductName>{product.name}</ProductName>
			<ProductPrice>{product.price} ILS</ProductPrice>
			<AddToCartBtn>Add to bag</AddToCartBtn>
		</StyledCardWrapper>
	);
};

export default ProductCard;
