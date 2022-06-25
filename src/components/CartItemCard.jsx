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

const CartItemCard = ({ cartItem }) => {
	return (
		<StyledCardWrapper>
			<CartItemImage src={cartItem.image} />
			<CartItemDetailsWrapper>
				<CartItemName>{cartItem.name}</CartItemName>
				<CartItemPrice>{cartItem.price} ILS </CartItemPrice>
				<CartItemQuantityWrapper>
					<CartQuantityBtn>-</CartQuantityBtn>
					<CartItemQuantity>{cartItem.quantity}</CartItemQuantity>
					<CartQuantityBtn>+</CartQuantityBtn>
				</CartItemQuantityWrapper>
			</CartItemDetailsWrapper>
			<RemoveItemBtn>
				<RemoveImage src={RemoveImg} />
			</RemoveItemBtn>
		</StyledCardWrapper>
	);
};

export default CartItemCard;
