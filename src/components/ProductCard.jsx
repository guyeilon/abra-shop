import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import {
	AddToCartBtn,
	ProductImage,
	ProductName,
	ProductPrice,
	SoldOutMsg,
	StyledCardWrapper,
} from '../Styles/ProductCard.style';

const ProductCard = ({ product, setIsCheckedOut }) => {
	const dispatch = useDispatch();

	const state = useSelector(state => state);

	const handleAddToCart = product => {
		setIsCheckedOut(false);
		dispatch(addToCart(product));
	};

	return (
		<StyledCardWrapper>
			{product.quantity === 0 && <SoldOutMsg>Sold Out!</SoldOutMsg>}
			<ProductImage src={product.image} />
			<ProductName>{product.name}</ProductName>
			<ProductPrice>{product.price} ILS</ProductPrice>

			<AddToCartBtn
				onClick={() => handleAddToCart(product)}
				className={product.productInfo.isAllQuantityAddedToCart ? 'disable' : null}>
				Add to bag
			</AddToCartBtn>
		</StyledCardWrapper>
	);
};

export default ProductCard;
