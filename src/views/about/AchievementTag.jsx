export const AchievementTag = ({ icon, highlight, desc }) => {
	return (
		<div className="text-xl lg:text-4xl md:space-y-3 flex flex-col items-center text-[#B35C00]">
			{icon}
			<h1 className="font-bold">{highlight} </h1>
			<h6 className="text-[#081922]">{desc} </h6>
		</div>
	);
};
