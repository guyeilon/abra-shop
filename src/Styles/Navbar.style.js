import styled from 'styled-components';
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
	margin-left: ${props => (props.mobile ? 0 : '64px')};
	margin-right: 98px;
	align-self: ${props => (props.mobile ? 'start' : 'center')};
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		margin-left: ${props => (props.mobile ? 0 : '66px')};
		margin-right: 0;
	}
`;

export const StyledLink = styled(NavLink)`
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
	margin-top: ${props => (props.mobile ? '51px' : '20px')};
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
	}
`;

export const Avatar = styled.img`
	align-self: center;
	margin-left: auto;
	margin-right: 24px;
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		margin-right: 18px;
	}
`;
export const MobileMenu = styled.img`
	align-self: center;
	margin-left: 18px;
	display: none;
	@media only screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		display: block;
	}
`;
