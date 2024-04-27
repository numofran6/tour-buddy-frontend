import { CiMapPin, CiMail } from 'react-icons/ci';
import { BiPhone } from 'react-icons/bi';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import { contactusimg } from '../../assets/images';

export const ContactUs = () => {
	return (
		<>
			<div className="max-w-container grid md:grid-cols-2 bg-[#242424] text-[#fcfcfc]">
				<div className="contact-container padding-x">
					<div className="space-y-5">
						<div className="flex items-center space-x-3">
							<div className="border-b-2 w-10 border-[#fcfcfc]" />
							<h1 className="uppercase">Contacts </h1>
						</div>

						<h3 className="font-heading text-2xl font-medium max-w-md">
							Still have questions?
						</h3>

						<p className="text-xs max-w-lg">
							If you have any questions, feel free to call the indicated phone
							number, write to the mail, or fill out the form below, and we will
							contact you!
						</p>
					</div>

					<div className="contact-info">
						<div className="space-y-5">
							<h6 className="flex items-center">
								<CiMapPin className="w-7 h-7 mr-2" /> Nirvana Street 123
							</h6>
							<h6 className="flex items-center">
								<BiPhone className="w-7 h-7 mr-2" /> +233 70 248 6090
							</h6>
							<h6 className="flex items-center">
								<CiMail className="w-7 h-7 mr-2" /> info@tourbuddy.com
							</h6>
						</div>

						<div className="space-y-5">
							<h2>Follow us</h2>
							<div className="flex items-center space-x-5">
								<BsInstagram className="w-5 h-5 cursor-pointer" />

								<BsFacebook className="w-5 h-5 cursor-pointer" />

								<BsYoutube className="w-5 h-5 cursor-pointer" />
							</div>
						</div>
					</div>
				</div>

				<img
					src={contactusimg}
					alt="Contact Us Cover"
					className="w-full h-auto sm:h-[650px] object-cover object-top"
				/>
			</div>
		</>
	);
};
