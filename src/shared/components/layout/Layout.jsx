import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../assets/logo.png';
import { BiPhone, BiLogoPaypal, BiLogoMastercard } from 'react-icons/bi';
import { CiMail, CiMenuBurger } from 'react-icons/ci';
import { RiVisaFill } from 'react-icons/ri';
import { useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import './Layout.css';

export const Layout = ({ children }) => {
	const [openMenu, setOpenMenu] = useState(false);
	const navLinkStyle = ({ isActive }) => {
		if (isActive) {
			return {
				color: '#B35C00',
				padding: '0.5rem 0',
				borderBottom: '1px solid #B35C00',
			};
		} else {
			return {
				padding: '0.5rem 0',
			};
		}
	};

	return (
		<>
			<nav className="nav-container padding-x max-w-container">
				<Link to={'/'} className="nav-title">
					Tour Buddy
				</Link>

				<div className="nav-menu-desktop gb-transition">
					<NavLink to={'/'} style={navLinkStyle}>
						Home
					</NavLink>
					<NavLink to={'/tours'} style={navLinkStyle}>
						Tours
					</NavLink>
					<NavLink to={'/booked-tours'} style={navLinkStyle}>
						Booked Tours
					</NavLink>
					<NavLink to={'/about'} style={navLinkStyle}>
						About
					</NavLink>
				</div>

				<div className="lg:hidden">
					<button onClick={() => setOpenMenu(true)}>
						<CiMenuBurger className="w-8 h-8" />
					</button>
				</div>

				{openMenu && (
					<div className="menu-modal">
						<div className="flex justify-end">
							<button onClick={() => setOpenMenu(false)}>
								<TfiClose className="w-10 h-10" />
							</button>
						</div>

						<div className="menu-modal-links gb-transition">
							<div>
								<NavLink to={'/'} style={navLinkStyle}>
									Home
								</NavLink>
							</div>
							<div>
								<NavLink to={'/tours'} style={navLinkStyle}>
									Tours
								</NavLink>
							</div>
							<div>
								<NavLink to={'/booked-tours'} style={navLinkStyle}>
									Booked Tours
								</NavLink>
							</div>
							<div>
								<NavLink to={'/about'} style={navLinkStyle}>
									About
								</NavLink>
							</div>
						</div>
					</div>
				)}
			</nav>

			{children}

			<footer className="max-w-container padding-x footer-container">
				<div className="space-y-5 text-xs">
					<Link to={'/'} className="flex items-center space-x-3">
						<img src={logo} alt="Logo" className="w-10 h-10" />
						<h4 className="uppercase font-bold text-xl text-[#B35C00]">
							Tour Buddy
						</h4>
					</Link>

					<h6 className="flex items-center">
						<BiPhone className="w-5 h-5 mr-1" /> +233 70 248 6090
					</h6>

					<h6 className="flex items-center">
						<CiMail className="w-5 h-5 mr-1" /> travelist@tourbuddy.com
					</h6>

					<p className="text-gray-400">
						2023 &copy; TOUR BUDDY. All rights reserved{' '}
					</p>
				</div>

				<div className="space-y-5 flex flex-col">
					<HashLink
						smooth
						to={'/#regions'}
						className="footer-link gb-transition"
					>
						Regions
					</HashLink>
					<HashLink
						smooth
						to={'/#advantages'}
						className="footer-link gb-transition"
					>
						Advantages
					</HashLink>
					<HashLink
						smooth
						to={'/#popular'}
						className="footer-link gb-transition"
					>
						Popular places
					</HashLink>
				</div>

				<div className="space-y-5 flex flex-col">
					<Link smooth to={'/tours'} className="footer-link gb-transition">
						Tours
					</Link>
					<Link to={'/booked-tours'} className="footer-link gb-transition">
						Booked Tours
					</Link>
					<Link to={'/about'} className="footer-link gb-transition">
						About Us
					</Link>
				</div>

				<div className="space-y-5 flex flex-col">
					<HashLink
						smooth
						to={'/#contact-us'}
						className="footer-link gb-transition"
					>
						Contacts
					</HashLink>
					<HashLink smooth to={'/#faqs'} className="footer-link gb-transition">
						FAQ
					</HashLink>
				</div>

				<div className="space-y-5 flex flex-col">
					<h6 className="font-semibold">Payment methods</h6>
					<div className="flex items-center space-x-5">
						<RiVisaFill className="w-5 h-5" />

						<BiLogoPaypal className="w-5 h-5" />

						<BiLogoMastercard className="w-5 h-5" />
					</div>
				</div>
			</footer>
		</>
	);
};
