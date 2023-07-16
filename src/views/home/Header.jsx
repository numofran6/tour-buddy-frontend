export const Header = () => {
	return (
		<header className="home-bg-color min-h-[100vh]">
			<div className="max-w-container flex flex-col justify-end space-y-7 pt-14 pb-10">
				<h1 className="text-7xl uppercase font-medium font-heading">
					Discover the real{' '}
					<span className="bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 inline-block text-transparent bg-clip-text">
						Ghana
					</span>
				</h1>
				<p className="max-w-3xl text-sm">
					Immerse yourself in the culture of Ghana through locals, learn the
					history, visit the most beautiful places, create memories that you
					will never forget in your life.
				</p>
			</div>

			<div className="h-[60vh]">
				<img src="" alt="" className="h-full w-full img-bg object-cover" />
			</div>
		</header>
	);
};
