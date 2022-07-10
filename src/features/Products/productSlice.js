import { createSlice, current } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';
import { addToCart, decreaseCart, IncreaseCart, removeFromCart } from '../cart/cartSlice';

const initialState = {
	products: [],
};

const updateInState = (state, index, boolean) => {
	state.products[index].productInfo.isAllQuantityAddedToCart = boolean;
};

const productsSlice = createSlice({
	name: 'products',
	initialState,

	reducers: {
		checkOut(state, action) {
			state.products.map(item => {
				item.productInfo.ordered = item.productInfo.addedToCart;
				item.productInfo.addedToCart = 0;
				item.quantity -= item.productInfo.ordered;
			});
			localStorage.setItem('products', JSON.stringify(state.products));
		},
	},
	extraReducers: builder => {
		builder
			.addCase(addToCart, (state, action) => {
				const productIndex = state.products.findIndex(product => product.id === action.payload.id);

				if (state.products[productIndex].productInfo.addedToCart < state.products[productIndex].quantity) {
					state.products[productIndex].productInfo.addedToCart++;
				}
				if (state.products[productIndex].productInfo.addedToCart === state.products[productIndex].quantity) {
					updateInState(state, productIndex, true);
				}

				localStorage.setItem('products', JSON.stringify(state.products));
			})
			.addCase(removeFromCart, (state, action) => {
				const productIndex = state.products.findIndex(product => product.id === action.payload.id);

				state.products[productIndex].productInfo.addedToCart -= action.payload.cartItemQuantity;

				updateInState(state, productIndex, false);

				localStorage.setItem('products', JSON.stringify(state.products));
			})
			.addCase(decreaseCart, (state, action) => {
				const productIndex = state.products.findIndex(product => product.id === action.payload.id);

				state.products[productIndex].productInfo.addedToCart -= 1;

				updateInState(state, productIndex, false);

				localStorage.setItem('products', JSON.stringify(state.products));
			})
			.addCase(IncreaseCart, (state, action) => {
				const productIndex = state.products.findIndex(product => product.id === action.payload.id);

				if (state.products[productIndex].productInfo.addedToCart < state.products[productIndex].quantity) {
					state.products[productIndex].productInfo.addedToCart++;
				}
				if (state.products[productIndex].productInfo.addedToCart === state.products[productIndex].quantity) {
					updateInState(state, productIndex, true);
				}
				localStorage.setItem('products', JSON.stringify(state.products));
			})
			.addMatcher(apiSlice.endpoints.getProducts.matchFulfilled, (state, action) => {
				const newProducts = action.payload;

				const productsFromStorage = localStorage.getItem('products')
					? JSON.parse(localStorage.getItem('products'))
					: [];

				const updatedProducts = newProducts.map(a => {
					const exists = productsFromStorage.find(b => a.id === b.id);

					if (exists) {
						a = { ...a, productInfo: exists.productInfo, quantity: exists.quantity };
					}

					return a;
				});

				state.products = updatedProducts;
			});
	},
});

export const { checkOut } = productsSlice.actions;

export default productsSlice.reducer;
