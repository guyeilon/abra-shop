import styled from 'styled-components/macro';

export const StyledCardWrapper = styled.section`
	display: flex;
	flex-direction: row;
	height: 100px;
	margin-bottom: 24px;
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		flex-direction: column;
		position: relative;
		margin-right: 18px;

		scroll-snap-align: start;
	}
`;

export const CartItemImage = styled.img`
	width: 100px;
	height: 100px;
	margin-right: 11px;
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		width: 125px;
		height: 125px;
		margin-right: 0;
		margin-bottom: 12px;
	}
`;

export const CartItemDetailsWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
export const CartItemName = styled.div`
	font-size: 20px;
	line-height: 1;
	color: #000;
	margin-bottom: 8px;
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		font-size: 16px;
		margin-bottom: 8px;
	}
`;
export const CartItemPrice = styled.div`
	color: #808285;
	font-size: 20px;
	line-height: 1;
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		font-size: 14px;
		margin-bottom: 10px;
	}
`;
export const CartItemQuantityWrapper = styled.div`
	align-self: flex-start;
	display: flex;
	margin-top: auto;
`;
export const CartQuantityBtn = styled.button`
	border: none;
	outline: none;
	background: none;
	padding: 0.2rem 0.5rem;
	cursor: pointer;
	font-size: 20px;
	line-height: 1;
	color: #808285;
	&:hover {
		background-color: #fff;
		color: #808285;
	}
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		font-size: 16px;
	}
`;

export const CartItemQuantity = styled.div`
	color: #808285;
	font-size: 20px;
	line-height: 1;
	align-self: center;
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		font-size: 16px;
	}
`;

export const RemoveItemBtn = styled.button`
	border: none;
	outline: none;
	background: none;
	cursor: pointer;
	align-self: flex-end;
	margin-left: auto;
	padding: 0;
	width: fit-content;
	height: fit-content;

	&:hover {
		background-color: #fff;
		color: #ccc;
	}
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		position: absolute;
		right: 8px;
		top: 8px;
	}
`;

export const RemoveImage = styled.img`
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		width: 20px;
		height: 20px;
	}
`;
