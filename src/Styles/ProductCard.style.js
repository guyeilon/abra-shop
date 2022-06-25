import styled from 'styled-components';

export const StyledCardWrapper = styled.article`
	width: 292px;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		width: 160px;
	}
`;

export const ProductImage = styled.img`
	margin-bottom: 16px;
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		width: 160px;
		height: 160px;
	}
`;

export const ProductName = styled.div`
	font-size: 20px;
	color: #000;
	margin-bottom: 8px;
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		font-size: 16px;
	}
`;
export const ProductPrice = styled.div`
	font-size: 20px;
	color: #808285;
	margin-bottom: 16px;
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		font-size: 16px;
	}
`;
export const AddToCartBtn = styled.button`
	width: 100%;
	border: solid 1px #000;
	background-color: #fff;
	font-size: 18px;
	letter-spacing: 0.72px;
	color: #000;
	padding: 12px 0;
	text-transform: uppercase;
	cursor: pointer;
	padding: 12px 0;
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		font-size: 14px;
		padding: 8px 0;
	}
`;
