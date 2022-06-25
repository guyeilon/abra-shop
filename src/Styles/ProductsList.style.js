import styled from 'styled-components';

export const StyledPageWrapper = styled.section`
	display: flex;
	flex-direction: row;
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		flex-direction: column-reverse;
		overflow-y: auto;
		scroll-behavior: smooth;
		height: 100vh;
		overscroll-behavior-inline: contain;
	}
`;

export const StyledProductsListWrapper = styled.section`
	padding: 64px 24px 24px;
	flex: 6;

	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		padding: 36px 18px 89px;
	}
	@media only screen and (min-width: ${({ theme }) => theme.breakPoints.mobile}) {
		overflow-y: auto;
		overscroll-behavior-inline: contain;
		height: calc(100vh - 72px);
		scroll-behavior: smooth;
		::-webkit-scrollbar {
			width: 0.2rem;
			height: 1em;
		}
	}
`;

export const PageHeader = styled.h1`
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		font-size: 24px;
		text-align: center;
	}
`;

export const StyledProductsList = styled.article`
	margin-top: 40px;
	gap: 48px 24px;
	flex-wrap: wrap;
	display: flex;
	flex-direction: row;
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		margin-top: 24px;
	}
`;
export const StyledCartWrapper = styled.aside`
	flex: 1;

	height: calc(100vh - 72px);
	box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
	padding: 40px 24px 5px;
	margin-left: auto;
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		width: 100%;
		padding: 24px 18px;
		/* height: 50px; */
	}
`;

export const CartHeader = styled.h1`
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		text-align: center;
		font-size: 24px;
	}
`;
