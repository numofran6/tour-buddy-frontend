import { IconButton } from '@mui/material';
import { useState } from 'react';
import { CiMapPin, CiMail } from 'react-icons/ci';
import { BiPhone } from 'react-icons/bi';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import { contactusimg } from '../../assets/images';

export const ContactUs = () => {
	const [showMessage, setShowMessage] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		const name = e.target[0].value;
		const message = e.target[1].value;
		const email = e.target[2].value;

		if (name && message && email) {
			setShowMessage(true);
			e.target.reset();
		}
	};

	return (
		<>
			<div className="flex bg-[#081922] text-[#fcfcfc]">
				<div className="space-y-10 py-10 ml-[7.7rem] w-1/2 h-[100vh]">
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

					<div className="flex space-x-20 text-sm">
						<div className="space-y-5">
							<h6 className="flex items-center">
								<CiMapPin className="w-7 h-7 mr-2" /> NirvanaStreet 123,
								Ashaiman
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

					<form onSubmit={handleSubmit} className="flex flex-col space-y-8">
						<input
							type="text"
							placeholder="Your Name"
							className="contact-input"
						/>
						<input
							type="text"
							placeholder="Message"
							className="contact-input"
						/>
						<input
							type="text"
							placeholder="Your E-Mail"
							className="contact-input"
						/>

						<div>
							<IconButton
								type="submit"
								style={{ color: '#fcfcfc', backgroundColor: '#295B5F' }}
								className="w-24 h-24 rounded-full flex flex-col justify-center"
							>
								<p className="text-xs">Contact Us</p>
							</IconButton>

							{showMessage && (
								<p className="text-[#295B5F]">
									Thanks for reaching out. We will get back to you ASAP.
								</p>
							)}
						</div>
					</form>
				</div>

				<div className="bg-[#295B5F] w-1/2 h-[100vh]">
					<img
						src={contactusimg}
						alt="Contact Us Cover"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</>
	);
};
