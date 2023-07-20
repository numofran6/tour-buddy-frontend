import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const Map = () => {
	const defaultProps = {
		center: {
			lat: 5.694385,
			lng: -0.029529,
		},
		zoom: 11,
	};

	return (
		<div style={{ height: '100%', width: '100%' }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: '' }}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
			>
				<AnyReactComponent lat={5.694385} lng={-0.029529} text="My Marker" />
			</GoogleMapReact>
		</div>
	);
};
