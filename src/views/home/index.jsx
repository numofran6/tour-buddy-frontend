/**
 * Internal dependencies
 */
import Advantages from './Advantages';
import Header from './Header';
import HowItWorks from './HowItWorks';
import Regions from './Regions';
import { Layout } from '../../shared/components';
import './index.scss';

export default () => {
	return (
		<Layout className="index-nav" title="Home">
			<Header />

			<main>
				<section id="faqs">
					<HowItWorks />
				</section>

				<section className="py-20" id="regions">
					<Regions />
				</section>

				<section className="pt-10 pb-20" id="advantages">
					<Advantages />
				</section>
			</main>
		</Layout>
	);
};
