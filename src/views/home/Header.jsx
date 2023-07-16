import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

export const Header = () => {
	const navLinkStyle = ({ isActive }) => {
		if (isActive) {
			return {
				color: '#B35C00',
				backgroundColor: 'white',
				padding: '0.5rem 1rem',
				borderRadius: '0.375rem',
			};
		} else {
			return {
				padding: '0.5rem 1rem',
				borderRadius: '0.375rem',
			};
		}
	};

	return (
		<header className="home-bg-color min-h-[100vh]">
			<nav className="flex items-center justify-between max-w-container py-5">
				<Link to={'/'} className="flex items-center space-x-3">
					<h4 className="uppercase font-bold text-xl text-[#B35C00]">
						Tour Buddy
					</h4>
				</Link>

				<img src={logo} alt="Logo" className="w-10 h-10" />

				<div className="flex items-center text-sm font-semibold gb-transition">
					<NavLink to={'/'} style={navLinkStyle}>
						Home
					</NavLink>
					<NavLink to={'/tours'} style={navLinkStyle}>
						Tours
					</NavLink>
					<NavLink to={'/contacts'} style={navLinkStyle}>
						Contacts
					</NavLink>
					<NavLink to={'/about'} style={navLinkStyle}>
						About
					</NavLink>
				</div>
			</nav>

			<section>
				<div className="max-w-container flex flex-col justify-end space-y-7 pt-14 pb-10">
					<h1 className="text-7xl uppercase font-medium font-heading">
						Discover the real{' '}
						<span className="bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 inline-block text-transparent bg-clip-text">
							Ghana
						</span>
					</h1>
					<p className="max-w-3xl text-sm">
						Immerse yourself in the culture of Ghana through locals, learn the
						history, visit the most beautiful places, create memories that you
						will never forget in your life.
					</p>
				</div>

				<div className="h-[60vh]">
					<img src="" alt="" className="h-full w-full img-bg object-cover" />
				</div>
			</section>
		</header>
	);
};
