import Map, {
	FullscreenControl,
	GeolocateControl,
	Marker,
	NavigationControl,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from 'react';

export const MapComponent = () => {
	const [lng, setLng] = useState(-0.029529);
	const [lat, setLat] = useState(5.694385);

	return (
		<div style={{ height: '100%', width: '100%' }}>
			<Map
				mapboxAccessToken="pk.eyJ1IjoibnVtb2ZyYW42IiwiYSI6ImNsZGRiZWFqNzAxaHYzdnJzZGsxMG5uankifQ.kKG8lHf3En9AwmENBOVmfQ"
				initialViewState={{
					longitude: lng,
					latitude: lat,
					zoom: 12,
				}}
				style={{ width: '100%' }}
				mapStyle="mapbox://styles/mapbox/streets-v9"
			>
				<Marker longitude={lng} latitude={lat} />
				<NavigationControl position="bottom-right" />
				<FullscreenControl />
				<GeolocateControl />
			</Map>
		</div>
	);
};
