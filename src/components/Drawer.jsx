import React, { useEffect } from 'react';
import { Logo, StyledLink, LinkBorder, LinksWrapper } from '../Styles/Navbar.style';

import LogOutImage from '../Assets/Images/logout.png';
import { Logout, LogoutWrapper, StyledDrawer, StyledDrawerWrapper } from '../Styles/Drawer.style';

const Drawer = ({ pathLinks, handleClicked }) => {
	const onWindowSizeChanged = () => {
		const currentWidth = window.innerWidth;
		if (currentWidth > 880) {
			handleClicked();
		}
	};

	useEffect(() => {
		window.addEventListener('resize', onWindowSizeChanged);
		return () => window.removeEventListener('resize', onWindowSizeChanged);
	}, []);

	return (
		<StyledDrawerWrapper>
			<StyledDrawer>
				{/* <Logo src={LogoImage} mobile /> */}
				{/* <CloseDrawer src={CloseDrawerImage} onClick={() => setToggle(false)} /> */}
				<LinksWrapper mobile>
					{pathLinks.map(link => (
						<StyledLink mobile='true' key={link} to={`/${link}`} onClick={handleClicked}>
							<LinkBorder mobile />
							{link}
						</StyledLink>
					))}
				</LinksWrapper>
				<LogoutWrapper onClick={handleClicked}>
					<Logout src={LogOutImage} />
					Log out
				</LogoutWrapper>
			</StyledDrawer>
		</StyledDrawerWrapper>
	);
};

export default Drawer;
