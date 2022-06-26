import React from 'react';
import { useLocation } from 'react-router-dom';
import {
	CartHeader,
	PageHeader,
	StyledCartWrapper,
	StyledPageWrapper,
	StyledProductsList,
	StyledProductsListWrapper,
} from '../Styles/ProductsList.style';
import data from '../data/db.json';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';

const ProductsList = () => {
	const location = useLocation();
	const categoryToShow = location.pathname.substring(1);

	const filterData = data.products.filter(product => {
		return product.categories.includes(categoryToShow.toLowerCase());
	});

	return (
		<StyledPageWrapper>
			<StyledCartWrapper>
				<CartHeader>My cart</CartHeader>
				<Cart data={data} />
			</StyledCartWrapper>
			<StyledProductsListWrapper>
				<PageHeader>{categoryToShow}</PageHeader>
				<StyledProductsList>
					{filterData.map((product, index) => (
						<ProductCard product={product} key={index} />
					))}
				</StyledProductsList>
			</StyledProductsListWrapper>
		</StyledPageWrapper>
	);
};

export default ProductsList;
