import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
	CartContentWrapper,
	CartEmptyImg,
	CartEmptyWrapper,
	CartMsgEmpty,
	CartMsgFull,
	CartSubtotal,
	CartSubtotalAmount,
	CartSubtotalWrapper,
	CheckoutBtn,
} from '../Styles/Cart.style';

import cartEmptyImage from '../Assets/Images/empty-cart.png';
import CartItemCard from './CartItemCard';
import { clearCart, getTotals } from '../features/cart/cartSlice';
import { checkOut } from '../features/Products/productSlice';

const Cart = ({ isCheckedOut, setIsCheckedOut }) => {
	const cart = useSelector(state => state.cart);
	const { cartItems } = cart;

	const dispatch = useDispatch();

	const handleCheckedOut = async () => {
		setIsCheckedOut(true);
		dispatch(clearCart());
		dispatch(checkOut());
	};

	useEffect(() => {
		dispatch(getTotals());
	}, [cart, dispatch]);

	let content;
	const cartEmpty = cartItems.length === 0;
	if (cartEmpty) {
		content = (
			<CartEmptyWrapper>
				<CartEmptyImg src={cartEmptyImage} />
				<CartMsgEmpty>
					{isCheckedOut ? 'Congratulations! We will process your order immediately' : 'Your cart is empty'}
				</CartMsgEmpty>
			</CartEmptyWrapper>
		);
	} else {
		content = (
			<>
				<CartMsgFull>Items are reserved for 60 minutes</CartMsgFull>
				<CartContentWrapper>
					{cartItems.map((cartItem, index) => (
						<CartItemCard cartItem={cartItem} key={index} />
					))}
				</CartContentWrapper>
				<CartSubtotalWrapper>
					<CartSubtotal>Subtotal:</CartSubtotal>
					<CartSubtotalAmount>{cart.cartTotalAmount} ILS</CartSubtotalAmount>
				</CartSubtotalWrapper>
				<CheckoutBtn onClick={() => handleCheckedOut()}>checkout</CheckoutBtn>
			</>
		);
	}

	return <div>{content}</div>;
};

export default Cart;
