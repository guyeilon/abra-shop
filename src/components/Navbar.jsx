import React, { useState } from 'react';
import {
	Logo,
	StyledLink,
	StyledNavbar,
	LinksWrapper,
	LinkBorder,
	Avatar,
	MobileMenu,
	MenuIcon,
	MobileMenuBtn,
} from '../Styles/Navbar.style';
import LogoImage from '../Assets/Images/logo.png';
import AvatarImage from '../Assets/Images/avatar.png';
import MenuImage from '../Assets/Images/menu.png';
import Drawer from './Drawer';

const Navbar = ({ pathLinks }) => {
	const [toggle, setToggle] = useState(false);
	const [className, setClassName] = useState(null);

	const handleClicked = () => {
		setToggle(!toggle);
		!toggle ? setClassName('clicked') : setClassName(null);
	};

	return (
		<StyledNavbar>
			{/* <MobileMenu src={MenuImage} onClick={() => setToggle(true)} /> */}
			<MobileMenu onClick={handleClicked}>
				<MenuIcon className={className} />
			</MobileMenu>
			{toggle && <Drawer pathLinks={pathLinks} handleClicked={handleClicked} />}
			<Logo src={LogoImage} />
			<LinksWrapper>
				{pathLinks.map((link, index) => (
					<StyledLink key={index} to={`/${link}`}>
						{link}
						<LinkBorder />
					</StyledLink>
				))}
			</LinksWrapper>
			<Avatar src={AvatarImage} />
		</StyledNavbar>
	);
};

export default Navbar;
