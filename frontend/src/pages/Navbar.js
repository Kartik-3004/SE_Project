import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = (props) => {
	return (
		<div>
			<Navbar color="light" light expand="md">
				<NavbarBrand
					className="nav-brand"
					onClick={(_) => {
						props.setPage(0);
					}}
				>
					Room Booking system
				</NavbarBrand>
			</Navbar>
		</div>
	);
};

export default Header;
