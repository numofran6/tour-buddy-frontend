import { FiArrowUpRight } from 'react-icons/fi';

export const UnderlineBtn = ({ title }) => {
	return (
		<p className="border-b-2 border-[#081922] text-[#081922] flex items-center text-xs font-semibold pl-1">
			{title}{' '}
			<FiArrowUpRight className="ml-5 w-5 h-5 hover:-translate-y-1 transition duration-200 ease-in-out" />
		</p>
	);
};
