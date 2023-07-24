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
				<section className="py-20" id="regions">
					<Regions />
				</section>

				<section id="faqs">
					<HowItWorks />
				</section>

				<section className="pt-40 pb-10" id="popular">
					<Featured />
				</section>

				<section className="py-20" id="advantages">
					<Advantages />
				</section>

				<section id="contact-us">
					<ContactUs />
				</section>
			</main>
		</Layout>
	);
};
