import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
	return (
		<section className="p-top mb-15">
			<div className="max-w-7xl mx-auto px-6">
				<div className="bg-(--primary-color)/4 rounded-3xl p-8 md:p-14 grid gap-12 md:grid-cols-2 items-center">

					{/* Left Content */}
					<div>
						<p className="text-sm font-medium text-(--primary-color) mb-3 uppercase">
							We’re here to help you
						</p>

						<h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
							Let’s Discuss Your
							<br/>
							Care Service Needs
						</h2>

						<p className="text-gray-600 leading-relaxed mb-10 max-w-md">
							Whether you need care for a child, an elderly family member, or someone
							          recovering at home, our team is ready to assist you.
						</p>

						{/* Contact Info */}
						<div className="space-y-6">
							<div className="flex items-center gap-4">
								<div className="w-10 h-10 rounded-full bg-(--primary-color)/10 flex items-center justify-center text-(--primary-color)">
									<IoMdMail size={26}/>
								</div>
								<div>
									<p className="text-sm text-gray-500">Email</p>
									<p className="font-medium text-gray-800">
										support@care.xyz
									</p>
								</div>
							</div>

							<div className="flex items-center gap-4">
								<div className="w-10 h-10 rounded-full bg-(--primary-color)/10 flex items-center justify-center text-(--primary-color)">
									<FaPhoneAlt size={24}/>
								</div>
								<div>
									<p className="text-sm text-gray-500">Phone</p>
									<p className="font-medium text-gray-800">
										+880 1234-567890
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right Form */}
					<div className="bg-white shadow-md rounded-2xl p-8 md:p-10">
						<form className="space-y-6">

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Name
								</label>
								<input type="text" placeholder="Your full name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-(--primary-color)/40"/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Email
								</label>
								<input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-(--primary-color)/40"/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Care Type
								</label>
								<select className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-(--primary-color)/40 cursor-pointer">
									<option>Select service</option>
									<option>Baby Care</option>
									<option>Elderly Care</option>
									<option>Sick People Care</option>
								</select>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Message
								</label>
								<textarea rows="4" placeholder="Tell us about your care needs" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-(--primary-color)/40"></textarea>
							</div>

							<button type="submit" className="btn-primary">
								Send Request
								<span className="text-lg">→</span>
							</button>

						</form>
					</div>

				</div>
			</div>
		</section>
	);
};

export default Contact;
