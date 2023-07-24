import { Search } from './Search';

export const Header = () => {
	return (
		<header className="home-bg-color">
			<div className="max-w-container padding-x header-container">
				<h1 className="text-5xl lg:text-7xl uppercase font-medium font-heading">
					Discover the real <span className="">Ghana</span>
				</h1>
				<p className="max-w-3xl text-sm">
					Immerse yourself in the culture of Ghana through locals, learn the
					history, visit the most beautiful places, create memories that you
					will never forget in your life.
				</p>
			</div>

			<section>
				<Search />
			</section>
		</header>
	);
};
