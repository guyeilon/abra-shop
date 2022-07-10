import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const StyledNavbar = styled.nav`
	width: 100%;
	height: 72px;
	display: flex;
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		height: 64px;
	}
`;

export const Logo = styled.img`
	margin-left: 64px;
	margin-right: 98px;
	align-self: center;
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		margin: 0 auto;
	}
`;

export const StyledLink = styled(NavLink)`
	width: fit-content;
	display: flex;
	flex-direction: ${props => (props.mobile ? 'row' : 'column')};
	font-weight: 500;
	color: ${props =>
		props.mobile ? ({ theme }) => theme.colors.navMobileLinks : ({ theme }) => theme.colors.navLinks};
	text-decoration: none;
	border-bottom: 2px solid transparent;
	padding: 0 16px;
	&.active {
		font-weight: 600;
	}

	&.active > div {
		border-bottom: ${props => (props.mobile ? 'none' : '2px solid #fff')};
		border-left: ${props => (props.mobile ? '2px solid #1a223e' : 'none')};
	}
`;

export const LinksWrapper = styled.div`
	align-self: flex-end;
	display: flex;
	align-items: ${props => (props.mobile ? 'start' : 'center')};
	justify-content: center;
	flex-direction: ${props => (props.mobile ? 'column' : 'row')};
	margin-top: ${props => (props.mobile ? '20px' : '20px')};
	gap: 26px;
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		display: ${props => (props.mobile ? 'flex' : 'none')};
		align-self: flex-start;
	}
`;

export const LinkBorder = styled.div`
	margin: 0 auto;
	width: 75%;
	padding-bottom: 15px;
	padding-right: 4px;
	margin-bottom: 5px;
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		margin-bottom: 0;
		width: 0;
	}
`;

export const Avatar = styled.img`
	align-self: center;
	margin-left: auto;
	margin-right: 24px;
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		margin-right: 18px;
		margin-left: 0;
	}
`;
// export const MobileMenu = styled.img`
// 	align-self: center;
// 	margin-left: 18px;
// 	display: none;
// 	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
// 		display: block;
// 	}
// `;
export const MobileMenu = styled.button`
	background-color: transparent;
	border: none;
	width: 48px;
	height: 48px;
	display: flex;
	justify-content: center;
	align-items: center;
	align-self: center;
	margin-left: 18px;
	display: none;
	position: relative;
	cursor: pointer;

	&:hover {
		background-color: transparent;
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		display: block;
	}
`;
export const MenuIcon = styled.div`
	background-color: #fff;
	width: 40px;
	height: 4px;
	border-radius: 5px;
	position: absolute;
	transition: all 0.5s;
	::after,
	::before {
		background-color: #fff;
		width: 40px;
		height: 4px;
		border-radius: 5px;
		position: absolute;
		transition: all 0.5s;
		content: '';
	}

	::after {
		transform: translate(-20px, 12px);
	}
	::before {
		transform: translate(-20px, -12px);
	}

	&.clicked {
		background-color: transparent;
		transform: rotate(360deg);

		::after {
			transform: translateX(-20px) rotate(45deg);
		}
		::before {
			transform: translateX(-20px) rotate(-45deg);
		}
	}
`;
