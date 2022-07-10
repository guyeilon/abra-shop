import styled from 'styled-components/macro';

export const CartContentWrapper = styled.div`
	margin-top: 9px;
	display: flex;
	/* justify-content: center; */
	flex-direction: column;

	overflow-y: auto;
	height: 634px;
	overscroll-behavior-inline: contain;
	scroll-behavior: smooth;

	scroll-snap-type: inline mandatory;

	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		flex-direction: row;
		justify-content: left;

		margin-top: 17px;
		height: 230px;

		/* min-width: 100vw; */

		overflow-x: auto;
		overscroll-behavior-inline: contain;
		scroll-behavior: smooth;

		scroll-snap-type: inline mandatory;
	}
`;
export const CartMsg = styled.div`
	font-size: 16px;
	color: #000;
`;
export const CartEmptyWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const CartMsgEmpty = styled(CartMsg)`
	align-self: center;
	text-align: center;
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		align-self: center;
		text-align: center;
	}
`;
export const CartMsgFull = styled(CartMsg)`
	align-self: left;
	margin-bottom: 34px;
	margin-top: 9px;
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		display: none;
	}
`;
export const CartEmptyImg = styled.img`
	margin-top: 310px;
	margin-bottom: 24px;
	align-self: center;
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		margin-top: 18px;
	}
`;

export const CartSubtotalWrapper = styled.div`
	margin-top: auto;
	display: flex;
	flex-direction: row;
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		margin-top: 28px;
	}
`;
export const CartSubtotal = styled.div`
	font-size: 20px;
`;
export const CartSubtotalAmount = styled.div`
	font-size: 20px;
	margin-left: auto;
`;

export const CheckoutBtn = styled.button`
	font-size: 18px;
	margin-top: 24px;
	width: 100%;
	color: #fff;
	background-color: #000;
	padding: 12px 0;
	text-transform: uppercase;
	cursor: pointer;
`;
