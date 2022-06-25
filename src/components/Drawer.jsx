import React, { useEffect } from 'react';
import { Logo, StyledLink, LinkBorder, LinksWrapper } from '../Styles/Navbar.style';
import LogoImage from '../Assets/Images/logo-black.png';
import CloseDrawerImage from '../Assets/Images/x-icon.png';
import LogOutImage from '../Assets/Images/logout.png';
import { CloseDrawer, Logout, LogoutWrapper, StyledDrawer, StyledDrawerWrapper } from '../Styles/Drawer.style';

const Drawer = ({ links, setToggle }) => {
	const onWindowSizeChanged = () => {
		const currentWidth = window.innerWidth;
		if (currentWidth > 880) {
			setToggle(false);
		}
	};

	useEffect(() => {
		window.addEventListener('resize', onWindowSizeChanged);
		return () => window.removeEventListener('resize', onWindowSizeChanged);
	}, []);

	return (
		<StyledDrawerWrapper>
			<StyledDrawer>
				<Logo src={LogoImage} mobile />
				<CloseDrawer src={CloseDrawerImage} onClick={() => setToggle(false)} />
				<LinksWrapper mobile>
					{links.map(link => (
						<StyledLink mobile='true' key={link} to={`/${link}`} onClick={() => setToggle(false)}>
							<LinkBorder mobile />
							{link}
						</StyledLink>
					))}
				</LinksWrapper>
				<LogoutWrapper>
					<Logout src={LogOutImage} onClick={() => setToggle(false)} />
					Log out
				</LogoutWrapper>
			</StyledDrawer>
		</StyledDrawerWrapper>
	);
};

export default Drawer;
