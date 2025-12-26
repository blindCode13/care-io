import Link from "next/link";

export default function Home() {
	return (
		<div className="p-top global-px">

			<section className="relative overflow-hidden bg-linear-to-b from-(--primary-color)/15 to-(--primary-color)/5 rounded-3xl">
				<div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-32">
					<div className="flex flex-col items-center gap-10 text-center">

						{/* Text Content */}
						<div className="max-w-3xl">
							<h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
								Trusted Care for the
								<br/>
								People
								<span className="text-(--primary-color)">You Love</span>
							</h1>

							<p className="text-lg md:text-xl text-gray-600 leading-relaxed">
								Reliable, compassionate care for children, elders, and family members—<br/>right where they feel safest: at home.
							</p>
						</div>

						{/* CTA */}
						<Link href="/service" className="btn-primary px-8 py-4 text-lg">
							Book a Service
						</Link>

						{/* Support Indicators */}
						<div className="mt-10 hidden sm:flex items-center gap-12 text-sm text-gray-600">
							<div className="flex flex-col items-center">
								<span className="font-semibold text-gray-800">Verified Caregivers</span>
								<span>Trusted and reliable professionals</span>
							</div>
							<div className="flex flex-col items-center">
								<span className="font-semibold text-gray-800">Flexible Booking</span>
								<span>Choose time and location easily</span>
							</div>
							<div className="flex flex-col items-center">
								<span className="font-semibold text-gray-800">Secure & Simple</span>
								<span>Safe platform for peace of mind</span>
							</div>
						</div>

					</div>
				</div>
			</section>

			<section className="py-20">
				<div className="max-w-7xl mx-auto px-6">

					{/* Header */}
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
							Our Mission at Care.io
						</h2>
						<p className="text-lg text-gray-600 leading-relaxed">
							We believe caregiving should feel safe, simple, and human — not stressful or uncertain.
						</p>
					</div>

					{/* Mission Content */}
					<div className="grid gap-10 md:grid-cols-3">

						{/* Card 1 */}
						<div className="about-card">
							<div className="w-12 h-12 mb-4 rounded-full bg-(--primary-color)/10 flex items-center justify-center text-(--primary-color) font-bold">
								01
							</div>
							<h3 className="text-xl font-semibold text-gray-800 mb-2">
								Trust Comes First
							</h3>
							<p className="text-gray-600 leading-relaxed">
								We focus on connecting families with reliable and trusted caregivers so you can feel confident about who is caring for your loved ones.
							</p>
						</div>

						{/* Card 2 */}
						<div className="about-card">
							<div className="w-12 h-12 mb-4 rounded-full bg-(--primary-color)/10 flex items-center justify-center text-(--primary-color) font-bold">
								02
							</div>
							<h3 className="text-xl font-semibold text-gray-800 mb-2">
								Care Made Simple
							</h3>
							<p className="text-gray-600 leading-relaxed">
								From finding services to booking care based on time and location, everything is designed to be easy and stress-free.
							</p>
						</div>

						{/* Card 3 */}
						<div className="about-card">
							<div className="w-12 h-12 mb-4 rounded-full bg-(--primary-color)/10 flex items-center justify-center text-(--primary-color) font-bold">
								03
							</div>
							<h3 className="text-xl font-semibold text-gray-800 mb-2">
								Accessible for Everyone
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Care.io is built to make caregiving accessible for families, whether it’s for children, elders, or those who need extra support.
							</p>
						</div>

					</div>
				</div>
			</section>

			<section className="py-20">
				<div className="max-w-7xl mx-auto px-6">

					{/* Header */}
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
							Care Services We Provide
						</h2>
						<p className="text-lg text-gray-600">
							Choose a care service designed to support your loved ones at home.
						</p>
					</div>

					{/* Cards */}
					<div className="space-y-8">

						{/* Baby Care */}
						<div className="flex flex-col sm:flex-row bg-white border-2 border-(--primary-color)/50 rounded-2xl overflow-hidden hover:shadow-lg transition">
							<div className="flex-1 p-6">
								<h3 className="text-xl font-semibold text-gray-800 mb-2">
									Baby Care
								</h3>
								<p className="text-gray-600 mb-4 leading-relaxed">
									Trusted babysitting and child care services to ensure safety, comfort, and proper attention for your little ones.
								</p>
								<Link href="/service?filter=Baby Care" className="inline-flex items-center text-sm font-medium text-(--primary-color) hover:underline">
									View Services →
								</Link>
							</div>
						</div>

						{/* Elderly Care */}
						<div className="flex flex-col sm:flex-row bg-white border-2 border-(--primary-color)/50 rounded-2xl overflow-hidden hover:shadow-lg transition">
							<div className="flex-1 p-6">
								<h3 className="text-xl font-semibold text-gray-800 mb-2">
									Elderly Care
								</h3>
								<p className="text-gray-600 mb-4 leading-relaxed">
									Compassionate support for elderly family members, helping them live comfortably and safely in their own homes.
								</p>
								<Link href="/service?filter=Elderly Care" className="inline-flex items-center text-sm font-medium text-(--primary-color) hover:underline">
									View Services →
								</Link>
							</div>
						</div>

						{/* Sick People Care */}
						<div className="flex flex-col sm:flex-row border-2 border-(--primary-color)/50 rounded-2xl overflow-hidden hover:shadow-lg transition">
							<div className="flex-1 p-6">
								<h3 className="text-xl font-semibold text-gray-800 mb-2">
									Sick People Care
								</h3>
								<p className="text-gray-600 mb-4 leading-relaxed">
									Home care services for sick or recovering individuals who need dedicated attention, assistance, and comfort.
								</p>
								<Link href="/service?filter=Sick People Care" className="inline-flex items-center text-sm font-medium text-(--primary-color) hover:underline">
									View Services →
								</Link>
							</div>
						</div>

					</div>
				</div>
			</section>

			<section className="bg-(--primary-color)/5 py-14 mb-15 rounded-3xl">
				<div className="max-w-7xl mx-auto px-6">
					{/* Testimonials Header */}
					<div className="max-w-3xl mx-auto text-center mb-14">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
							What Families Say About Us
						</h2>
						<p className="text-lg text-gray-600">
							Real experiences from families who trusted care.io with their loved ones.
						</p>
					</div>

					{/* Testimonials */}
					<div className="grid gap-10 md:grid-cols-3">

						{/* Testimonial 1 */}
						<div className="bg-white p-8 rounded-2xl border border-gray-100">
							<p className="text-gray-600 leading-relaxed mb-6">
								“Finding reliable care for my child was stressful until I used care.io.
								          The booking process was simple and the caregiver was amazing.”
							</p>
							<div>
								<p className="font-semibold text-gray-800">Ayesha Rahman</p>
								<p className="text-sm text-gray-500">Baby Care Service</p>
							</div>
						</div>

						{/* Testimonial 2 */}
						<div className="bg-white p-8 rounded-2xl border border-gray-100">
							<p className="text-gray-600 leading-relaxed mb-6">
								“care.io helped us find compassionate support for my elderly father.
								          It gave our family peace of mind knowing he was in good hands.”
							</p>
							<div>
								<p className="font-semibold text-gray-800">Mohammad Hasan</p>
								<p className="text-sm text-gray-500">Elderly Care Service</p>
							</div>
						</div>

						{/* Testimonial 3 */}
						<div className="bg-white p-8 rounded-2xl border border-gray-100">
							<p className="text-gray-600 leading-relaxed mb-6">
								“The caregiver was attentive and kind during my recovery.
								          Booking was easy and the support felt very personal.”
							</p>
							<div>
								<p className="font-semibold text-gray-800">Nusrat Jahan</p>
								<p className="text-sm text-gray-500">Sick People Care Service</p>
							</div>
						</div>

					</div>
				</div>
			</section>

		</div>
	);
}
