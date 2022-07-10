import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
	CartHeader,
	PageHeader,
	StyledCartWrapper,
	StyledPageWrapper,
	StyledProductsList,
	StyledProductsListWrapper,
} from '../Styles/ProductsList.style';

import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import { useGetProductsQuery } from '../features/api/apiSlice';

const ProductsList = () => {
	const location = useLocation();
	const categoryToShow = location.pathname.substring(1);

	const { data, isLoading, isSuccess, isError, error } = useGetProductsQuery();

	const products = useSelector(state => state.products.products);
	console.log(products);

	const [isCheckedOut, setIsCheckedOut] = useState(false);

	let content;
	if (isLoading) {
		content = <p>Loading...</p>;
	} else if (isSuccess) {
		const filterData = products.filter(product => {
			return product.catagories.includes(categoryToShow.toLowerCase());
		});
		content = filterData.map((product, index) => (
			<ProductCard product={product} key={index} setIsCheckedOut={setIsCheckedOut} />
		));
	} else if (isError) {
		content = <p>{error}</p>;
	}
	return (
		<StyledPageWrapper>
			<StyledCartWrapper>
				<CartHeader>My cart</CartHeader>
				<Cart isCheckedOut={isCheckedOut} setIsCheckedOut={setIsCheckedOut} />
			</StyledCartWrapper>
			<StyledProductsListWrapper>
				<PageHeader>{categoryToShow}</PageHeader>
				<StyledProductsList>{content}</StyledProductsList>
			</StyledProductsListWrapper>
		</StyledPageWrapper>
	);
};

export default ProductsList;
