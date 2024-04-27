/**
 * Internal dependencies
 */
import { advantages } from '../../shared/utils';

export default () => {
	return (
		<>
			<div className="space-y-10 max-w-container">
				<header className="advantages-header px-7 xl:px-0">
					<div>
						<h1>Why choose us?</h1>
						<h3>An exceptionally unique experience tailored to you</h3>
					</div>

					<p>
						Travelling with us means living the best momments of your life
						without worrying about the quality of service and safety.
					</p>
				</header>

				<div className="padding-x advantages-container">
					{advantages.map((item, index) => (
						<div
							key={index}
							className="space-y-3 bg-gray-300 h-[10rem] bg-cover relative"
							style={{ backgroundImage: `url(${item.img})` }}
						>
							<div className="advantage">
								<div>{item.icon}</div>

								<h1 className="text-lg">{item.title}</h1>

								<p className="text-xs">{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
