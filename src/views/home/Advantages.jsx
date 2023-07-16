import { SectionHeading, UnderlineBtn } from '../../shared/components';
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

				<div className="grid grid-cols-3 gap-10">
					{advantages.map((item, index) => (
						<div
							key={index}
							className="space-y-3 bg-gray-300 p-5 h-[10rem] flex flex-col justify-between text-[#fcfcfc]"
						>
							<div>{item.icon}</div>

							<h1 className="text-lg">{item.title}</h1>

							<p className="text-xs">{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
