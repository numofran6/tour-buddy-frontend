import { BsPeople } from 'react-icons/bs';
import { VscKey } from 'react-icons/vsc';
import { GiTakeMyMoney } from 'react-icons/gi';
import { RiMessage2Line } from 'react-icons/ri';
import { BiBadgeCheck } from 'react-icons/bi';
import { LuClock4 } from 'react-icons/lu';

export const advantages = [
	{
		icon: <BsPeople className="w-7 h-7" />,
		title: 'Experienced tour guides',
		description:
			'Our team includes experienced tour guides who will be by your side during the entire trip',
	},
	{
		icon: <VscKey className="w-7 h-7" />,
		title: 'Organization of turnkey tours',
		description:
			'Our team includes experienced tour guides who will be by your side during the entire trip',
	},
	{
		icon: <GiTakeMyMoney className="w-7 h-7" />,
		title: 'No extra costs',
		description:
			'We will not ask you to pay extra for anything. No unexpected costs',
	},
	{
		icon: <RiMessage2Line className="w-7 h-7" />,
		title: '24/7 Support',
		description:
			'Our operators are always on call to help you plan your dream trip',
	},
	{
		icon: <BiBadgeCheck className="w-7 h-7" />,
		title: 'Quality guarantee',
		description:
			'We guarantee the best quality of our tours from start to finish, tested over the years.',
	},
	{
		icon: <LuClock4 className="w-7 h-7" />,
		title: 'Many years of experience',
		description:
			'With years of experience, we know how to make your trip unforgettable',
	},
];
