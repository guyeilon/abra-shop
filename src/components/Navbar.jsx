import React, { useState } from 'react';
import { Logo, StyledLink, StyledNavbar, LinksWrapper, LinkBorder, Avatar, MobileMenu } from '../Styles/Navbar.style';
import LogoImage from '../Assets/Images/logo.png';
import AvatarImage from '../Assets/Images/avatar.png';
import MenuImage from '../Assets/Images/menu.png';
import Drawer from './Drawer';

const links = ['BestSellers', 'Clothing', 'Home', 'Office', 'Sports'];

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<StyledNavbar>
			<MobileMenu src={MenuImage} onClick={() => setToggle(true)} />
			{toggle && <Drawer links={links} setToggle={setToggle} />}
			<Logo src={LogoImage} />
			<LinksWrapper>
				{links.map((link, index) => (
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
