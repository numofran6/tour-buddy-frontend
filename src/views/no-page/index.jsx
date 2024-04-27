/**
 * External dependencies
 */
import { Button } from '@mui/material';

/**
 * Internal dependencies
 */
import { Link } from 'react-router-dom';
import { Layout } from '../../shared/components';

export default () => {
	return (
		<Layout>
			<div className="no-page-container will-animate fade-in">
				<h1 className="text-4xl font-heading">404 | Page Not Found</h1>

				<Link to={'/'}>
					<Button>Home</Button>
				</Link>
			</div>
		</Layout>
	);
};
