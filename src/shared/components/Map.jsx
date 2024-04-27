/**
 * External dependencies
 */
import Map, { GeolocateControl, Marker, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default ({ selectedRegions }) => {
	const getInitialViewState = () => {
		const longitudeValue =
			selectedRegions[0] === 'Volta Region'
				? 0.47028
				: selectedRegions[0] === 'Western Region'
				? -1.76853
				: selectedRegions[0] === 'Northern Region'
				? -0.84224
				: -0.186964;
		const latitudeValue =
			selectedRegions[0] === 'Volta Region'
				? 6.60391
				: selectedRegions[0] === 'Western Region'
				? 4.9045
				: selectedRegions[0] === 'Northern Region'
				? 9.40784
				: 5.603717;

		return {
			longitude: longitudeValue,
			latitude: latitudeValue,
			zoom: 12,
		};
	};

	const mapKey = selectedRegions.join(',');

	return (
		<div style={{ height: '100%', width: '100%' }}>
			<Map
				key={mapKey}
				mapboxAccessToken="pk.eyJ1IjoibnVtb2ZyYW42IiwiYSI6ImNsZGRiZWFqNzAxaHYzdnJzZGsxMG5uankifQ.kKG8lHf3En9AwmENBOVmfQ"
				initialViewState={getInitialViewState()}
				style={{ width: '100%' }}
				mapStyle="mapbox://styles/mapbox/streets-v9"
			>
				<Marker
					longitude={getInitialViewState().longitude}
					latitude={getInitialViewState().latitude}
				/>

				<NavigationControl position="bottom-right" />
				<GeolocateControl />
			</Map>
		</div>
	);
};
