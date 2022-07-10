import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
	cartTotalQuantity: 0,
	cartTotalAmount: 0,
};

const updateInState = (state, index, boolean) => {
	state.cartItems[index].productInfo.isAllQuantityAddedToCart = boolean;
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action) {
			const product = action.payload;

			const itemIndex = state.cartItems.findIndex(item => item.id === product.id);

			if (itemIndex >= 0) {
				if (state.cartItems[itemIndex].quantity > state.cartItems[itemIndex].cartItemQuantity) {
					state.cartItems[itemIndex].cartItemQuantity += 1;
					state.cartItems[itemIndex].productInfo.addedToCart++;

					if (product.quantity === state.cartItems[itemIndex].cartItemQuantity) {
						updateInState(state, itemIndex, true);
					}
				}
			} else if (action.payload.quantity != 0) {
				const tempCartItem = { ...product, cartItemQuantity: 1 };
				tempCartItem.productInfo = { ...tempCartItem.productInfo, addedToCart: 1 };

				if (product.quantity === tempCartItem.cartItemQuantity) {
					tempCartItem.productInfo = { ...tempCartItem.productInfo, isAllQuantityAddedToCart: true };
				}

				state.cartItems.push(tempCartItem);
			}

			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
		},
		removeFromCart(state, action) {
			const nextCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id);
			state.cartItems = nextCartItems;

			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
		},
		decreaseCart(state, action) {
			const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
			if (state.cartItems[itemIndex].cartItemQuantity > 1) {
				state.cartItems[itemIndex].cartItemQuantity -= 1;
				state.cartItems[itemIndex].productInfo.addedToCart--;
				updateInState(state, itemIndex, false);
			} else if ((state.cartItems[itemIndex].cartItemQuantity = 1)) {
				const nextCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id);
				state.cartItems = nextCartItems;
			}
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
		},
		IncreaseCart(state, action) {
			const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

			if (state.cartItems[itemIndex].quantity > state.cartItems[itemIndex].cartItemQuantity) {
				state.cartItems[itemIndex].cartItemQuantity += 1;
				state.cartItems[itemIndex].productInfo.addedToCart++;

				if (action.payload.quantity === state.cartItems[itemIndex].cartItemQuantity) {
					updateInState(state, itemIndex, true);
				}
			}

			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
		},
		clearCart(state) {
			state.cartItems = [];

			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
		},
		getTotals(state, action) {
			let { total, quantity } = state.cartItems.reduce(
				(cartTotal, cartItem) => {
					const { price, cartItemQuantity } = cartItem;
					const itemTotal = price * cartItemQuantity;

					cartTotal.total += itemTotal;
					cartTotal.quantity += cartItemQuantity;

					return cartTotal;
				},
				{
					total: 0,
					quantity: 0,
				}
			);
			state.cartTotalQuantity = quantity;
			state.cartTotalAmount = total;
		},
	},
});

export const { addToCart, removeFromCart, decreaseCart, IncreaseCart, clearCart, getTotals } = cartSlice.actions;

export const selectCartItemById = (state, cartItemId) => state.cart?.cartItems.find(item => item.id === cartItemId);

export default cartSlice.reducer;
