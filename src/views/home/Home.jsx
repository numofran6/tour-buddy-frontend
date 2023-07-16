import { Advantages } from './Advantages';
import { Featured } from './Featured';
import { Header } from './Header';
import { HowItWorks } from './HowItWorks';
import { Regions } from './Regions';

export const Home = () => {
	return (
		<>
			<Header />

			<main>
				<section className="py-20">
					<Regions />
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
			</main>
		</>
	);
};
