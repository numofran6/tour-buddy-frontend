import { Link } from 'react-router-dom';
import { Layout } from '../../shared/components';
import { Button } from '@mui/material';

export const NoPage = () => {
	return (
		<Layout>
			<div className="no-page-container">
				<h1 className="text-4xl font-heading">404 | Page Not Found</h1>

				<Link to={'/'}>
					<Button>Home</Button>
				</Link>
			</div>
		</Layout>
	);
};
