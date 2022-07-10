import styled from 'styled-components/macro';

export const StyledCardWrapper = styled.article`
	width: 292px;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
	position: relative;
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
export const SoldOutMsg = styled.div`
	position: absolute;
	top: 30%;
	left: 15%;
	text-align: center;
	align-self: center;
	font-size: 45px;
	font-weight: bold;
	color: #ed764c;
	border: 2px solid #ed764c;
	padding: 12px 12px;
	transform: rotate(30deg);
	margin-bottom: 8px;

	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		font-size: 20px;
		top: 25%;
		left: 20%;
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
