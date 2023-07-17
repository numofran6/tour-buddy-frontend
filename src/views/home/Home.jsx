import { Advantages } from './Advantages';
import { ContactUs } from './ContactUs';
import { Featured } from './Featured';
import { Header } from './Header';
import { HowItWorks } from './HowItWorks';
import { Regions } from './Regions';
import { Layout } from '../../shared/components';
import { Search } from './Search';
import './Home.css';

export const Home = () => {
	return (
		<Layout>
			<Header />

			<main>
				<section className="py-20">
					<Regions />
				</section>

				<section>
					<Search />
				</section>

				<section>
					<HowItWorks />
				</section>

				<section className="py-40">
					<Featured />
				</section>

				<section className="py-20">
					<Advantages />
				</section>

				<section>
					<ContactUs />
				</section>
			</main>
		</Layout>
	);
};
