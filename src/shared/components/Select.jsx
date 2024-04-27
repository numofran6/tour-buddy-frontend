/**
 * External dependencies
 */
import { useState, useEffect, useRef } from 'react';
import { SlArrowDown } from 'react-icons/sl';

/**
 * Internal dependencies
 */
import './Select.scss';

export default ({ value, options = [], onChange = () => {} }) => {
	const [showMenu, setShowMenu] = useState(false);
	const selectRef = useRef();

	const handleToggle = () => {
		setShowMenu((prev) => !prev);
	};

	const handleChangle = (item) => {
		onChange(item);
		setShowMenu(false);
	};

	useEffect(() => {
		const handleClickOutside = ({ target }) => {
			if (target && selectRef.current && !selectRef.current.contains(target)) {
				setShowMenu(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<span className="relative" ref={selectRef}>
			<button
				onClick={handleToggle}
				className={`btn-select ${showMenu ? 'is-active' : ''}`}
			>
				{value}
				<SlArrowDown className="inline ml-4 text-[13px] mb-[0.15rem]" />
			</button>

			<ul>
				{options.map(({ value, label }, index) => (
					<li key={index} onClick={() => handleChangle(value)}>
						{label}
					</li>
				))}
			</ul>
		</span>
	);
};
