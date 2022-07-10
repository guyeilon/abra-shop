import React from 'react';
import {
	CartItemDetailsWrapper,
	CartItemImage,
	CartItemName,
	CartItemPrice,
	CartItemQuantity,
	CartItemQuantityWrapper,
	CartQuantityBtn,
	RemoveImage,
	RemoveItemBtn,
	StyledCardWrapper,
} from '../Styles/CartItemCard.style';

import RemoveImg from '../Assets/Images/x-icon.png';
import { decreaseCart, IncreaseCart, removeFromCart } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CartItemCard = ({ cartItem }) => {
	const dispatch = useDispatch();

	const handleRemoveFromCart = cartItem => {
		dispatch(removeFromCart(cartItem));
	};
	const handleIncreaseCart = cartItem => {
		dispatch(IncreaseCart(cartItem));
	};
	const handleDecreaseCart = cartItem => {
		dispatch(decreaseCart(cartItem));
	};

	return (
		<StyledCardWrapper>
			<CartItemImage src={cartItem.image} />
			<CartItemDetailsWrapper>
				<CartItemName>{cartItem.name}</CartItemName>
				<CartItemPrice>{cartItem.price * cartItem.cartItemQuantity} ILS </CartItemPrice>
				<CartItemQuantityWrapper>
					<CartQuantityBtn onClick={() => handleDecreaseCart(cartItem)}>-</CartQuantityBtn>
					<CartItemQuantity>{cartItem.cartItemQuantity}</CartItemQuantity>
					<CartQuantityBtn onClick={() => handleIncreaseCart(cartItem)}>+</CartQuantityBtn>
				</CartItemQuantityWrapper>
			</CartItemDetailsWrapper>
			<RemoveItemBtn onClick={() => handleRemoveFromCart(cartItem)}>
				<RemoveImage src={RemoveImg} />
			</RemoveItemBtn>
		</StyledCardWrapper>
	);
};

export default CartItemCard;
