/**
 * Internal dependencies
 */
import Search from './Search';
import { bgBeach, bgCeil, bgFloor, explorer } from '../../assets/images';

export default () => {
	return (
		<header className="home-bg-color">
			<div className="header-container">
				<img
					src={bgCeil}
					alt=""
					width={1920}
					height={458}
					className="bg-ceil"
				/>
				<img
					src={bgBeach}
					alt=""
					width={1920}
					height={528}
					className="bg-beach fade-in"
				/>
				<h1 className="heading-primary fade-in">Explore.</h1>
				<img
					src={explorer}
					alt=""
					width={264}
					height={730}
					className="explorer fade-scale-down"
				/>
				<img
					src={bgFloor}
					alt=""
					width={1920}
					height={259}
					className="bg-floor fade-in"
				/>
			</div>

			<Search />
		</header>
	);
};
