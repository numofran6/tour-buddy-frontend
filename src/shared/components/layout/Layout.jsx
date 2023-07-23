import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { BiPhone, BiLogoPaypal, BiLogoMastercard } from 'react-icons/bi';
import { CiMail } from 'react-icons/ci';
import { RiVisaFill } from 'react-icons/ri';
import './Layout.css';

export const Layout = ({ children }) => {
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
			<nav className="flex items-center justify-between max-w-container py-5">
				<Link to={'/'} className="flex items-center space-x-3 relative">
					<h4 className="uppercase font-bold text-xl text-[#B35C00] z-10 bg-[#fcfcfc] bg-opacity-90">
						Tour Buddy
					</h4>
					{/* <img
						src={logo}
						alt="Logo"
						className="w-10 h-10 absolute z-0 -top-4 left-1/2 transform -translate-x-1/2"
					/> */}
				</Link>

				<div className="flex items-center text-sm font-semibold gb-transition space-x-9">
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
			</nav>

			{children}

			<footer className="text-sm max-w-container py-16 flex justify-between">
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
					<Link to={'/tours'} className="footer-link gb-transition">
						Tours
					</Link>
					<Link to={'/regions'} className="footer-link gb-transition">
						Regions
					</Link>
					<Link to={'/popular'} className="footer-link gb-transition">
						Popular places
					</Link>
				</div>

				<div className="space-y-5 flex flex-col">
					<Link to={'/tours'} className="footer-link gb-transition">
						About Ghana
					</Link>
					<Link to={'/regions'} className="footer-link gb-transition">
						Reviews
					</Link>
					<Link to={'/popular'} className="footer-link gb-transition">
						Advantages
					</Link>
				</div>

				<div className="space-y-5 flex flex-col">
					<Link to={'/contacts'} className="footer-link gb-transition">
						Contacts
					</Link>
					<Link to={'/faqs'} className="footer-link gb-transition">
						FAQ
					</Link>
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
