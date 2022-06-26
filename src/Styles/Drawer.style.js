import styled from 'styled-components';

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
	top: 0px;
	width: 76.2%;
	height: 100%;
	background-color: #fff;
	padding: 20px 18px 40px 18px;
	z-index: 5;
	transition: 0.5s cubic-bezier(0.82, 0.085, 0.395, 0.895);
`;

export const StyledDrawerWrapper = styled.section`
	position: absolute;
	top: 0px;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
`;
