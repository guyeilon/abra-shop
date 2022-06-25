import React from 'react';
import {
	CartContentWrapper,
	CartEmptyImg,
	CartMsgEmpty,
	CartMsgFull,
	CartSubtotal,
	CartSubtotalAmount,
	CartSubtotalWrapper,
	CheckoutBtn,
} from '../Styles/Cart.style';

import cartEmptyImage from '../Assets/Images/empty-cart.png';
import CartItemCard from './CartItemCard';

const Cart = ({ data }) => {
	let content;

	if (data.cart.length === 0) {
		content = (
			<CartContentWrapper>
				<CartEmptyImg src={cartEmptyImage} />
				<CartMsgEmpty>Your cart is empty</CartMsgEmpty>
			</CartContentWrapper>
		);
	} else {
		content = (
			<>
				<CartMsgFull>Items are reserved for 60 minutes</CartMsgFull>
				<CartContentWrapper>
					{data.cart.map((cartItem, index) => (
						<CartItemCard cartItem={cartItem} key={index} />
					))}
				</CartContentWrapper>
				<CartSubtotalWrapper>
					<CartSubtotal>Subtotal:</CartSubtotal>
					<CartSubtotalAmount>429 ILS</CartSubtotalAmount>
				</CartSubtotalWrapper>
				<CheckoutBtn>checkout</CheckoutBtn>
			</>
		);
	}

	return <div>{content}</div>;
};

export default Cart;
