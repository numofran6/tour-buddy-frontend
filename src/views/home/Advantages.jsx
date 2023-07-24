import { SectionHeading } from '../../shared/components';
import { advantages } from '../../shared/utils/data';

export const Advantages = () => {
	return (
		<>
			<div className="space-y-10 max-w-container">
				<SectionHeading
					heading={'Advantages'}
					subHeading={
						"That's why you should choose us for your next exciting journey"
					}
					description={
						'Travelling with us means living the best momments of your life without worrying about the quality of service and safety.'
					}
					showPaginationBtns={false}
				/>

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
