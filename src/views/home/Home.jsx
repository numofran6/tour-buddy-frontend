import { Advantages } from './Advantages';
import { ContactUs } from './ContactUs';
import { Featured } from './Featured';
import { Header } from './Header';
import { HowItWorks } from './HowItWorks';
import { Regions } from './Regions';
import { Layout } from '../../shared/components';
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
					<HowItWorks />
				</section>

				<section className="pt-40 pb-10">
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
