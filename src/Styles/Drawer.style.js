import styled from 'styled-components/macro';

export const CloseDrawer = styled.img`
	position: absolute;
	right: 18px;
	top: 20px;

	cursor: pointer;
`;

export const Logout = styled.img`
	cursor: pointer;
`;
export const LogoutWrapper = styled.div`
	cursor: pointer;
	margin-top: auto;
	align-self: flex-start;
	font-size: 16px;
	font-size: 16px;
	font-weight: 500;
	color: #808285;
	display: flex;
	align-items: center;
`;

export const StyledDrawer = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	top: 0;
	width: 50%;
	height: 100%;
	background-color: #fff;
	padding: 20px 18px 40px 18px;
	z-index: 5;

	transform-origin: left center;
	animation: showMenu 0.3s ease-in-out forwards;
`;

export const StyledDrawerWrapper = styled.section`
	position: absolute;
	top: 64px;
	width: 100%;
	height: calc(100% - 64px);
	background-color: rgba(0, 0, 0, 0.4);
`;
