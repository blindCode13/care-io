"use client";

import Link from "next/link";
import {useState} from "react";
import {LuEye, LuEyeClosed} from "react-icons/lu";
import {FcGoogle} from "react-icons/fc";
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";
import {registerUser} from "@/actions/server/auth";
import Loading from "@/app/loading";
import { signIn } from "next-auth/react";


const Register = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [passwordError, setPasswordError] = useState("");
	const [isProcessing, setIsProcessing] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const name = e.target.name.value;
		const email = e.target.email.value;
		const nid = e.target.nid.value;
		const contact = e.target.contact.value;
		const password = e.target.password.value;

		if (password.length <= 6) {
			setPasswordError("Password must be more than 6 characters long.");
			return;
		} else if (!/[A-Z]/.test(password)) {
			setPasswordError("Password must contain at least one uppercase character.");
		} else if (!/[a-z]/.test(password)) {
			setPasswordError("Password must contain at least one lowercase character.");
		} else {
			try {
				setIsProcessing(true);
				const userData = {
					name,
					email,
					password,
					nid,
					contact
				};
				const result = await registerUser(userData);

				if (result?.acknowledged) {
					const userData = {email, password};
        			const result = await signIn("credentials", {...userData, redirect: false});

        			if (!result.ok) return toast.error("Your account is registered but failed to login.");
        			toast.success("Your account has been registered.");
				}
				 else 
					toast.error("Failed to register the user");
				
			} catch (err) {
				toast.error(err.message);
			} finally {
				setIsProcessing(false);
			}
		}
	};

	return (
		<>
    {
      isProcessing && 
      <div className="absolute h-screen w-screen bg-white z-60">
        <Loading />
      </div>
    }
			<section className="min-h-screen flex items-center justify-center px-4">
				<form className="w-full max-w-md border-2 border-(--primary-color)/10 rounded-2xl shadow-lg p-8 relative"
					onSubmit={handleSubmit}>
					{/* Go Back */}
					<button type="button" className="absolute top-6 left-6 flex items-center gap-2 text-sm text-(--primary-color) hover:underline cursor-pointer"
						onClick={
							() => router.back()
					}>
						← Go Back
					</button>

					{/* Title */}
					<h2 className="text-2xl font-bold text-center text-gray-900 my-5">
						Register
					</h2>

					{/* Name */}
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-800 mb-2">
							Full Name
						</label>
						<input type="text" name="name" placeholder="Your full name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-(--primary-color)/40"/>
					</div>

					{/* Email */}
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-800 mb-2">
							Email Address
						</label>
						<input type="email" name="email" placeholder="yourname@example.com" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-(--primary-color)/40"/>
					</div>

					{/* NID */}
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-800 mb-2">
							NID No
						</label>
						<input type="text" name="nid" placeholder="Enter your NID number" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-(--primary-color)/40"/>
					</div>

					{/* Contact */}
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-800 mb-2">
							Contact Number
						</label>
						<input type="tel" name="contact" placeholder="01XXXXXXXXX" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-(--primary-color)/40"/>
					</div>

					{/* Password */}
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-800 mb-2">
							Password
						</label>

						<div className="relative">
							<input type={
									showPassword ? "text" : "password"
								}
								name="password"
								placeholder="Create a password"
								required
								className={
									`w-full px-4 py-3 pr-12 rounded-lg border ${
										passwordError ? "border-red-600" : "border-gray-300"
									} focus:outline-none focus:ring-2 focus:ring-(--primary-color)/40`
								}
								onChange={
									(e) => {
										const value = e.target.value;
										if (value.length > 6 && /[A-Z]/.test(value) && /[a-z]/.test(value)) 
											setPasswordError("");
										
									}
								}/> {/* Show / Hide Button */}
							<button type="button"
								onClick={
									() => setShowPassword(!showPassword)
								}
								className="absolute inset-y-0 right-4 flex items-center text-(--primary-color) text-2xl cursor-pointer">
								{
								showPassword ? <LuEyeClosed/>: <LuEye/>
							} </button>
						</div>

						{
						passwordError && (
							<p className="text-red-600 text-sm py-2">
								{passwordError}</p>
						)
					} </div>

					{/* Register Button */}
					<button type="submit" className="btn-primary w-full mt-2">
						Register
					</button>

					{/* Google Register */}
					<button type="button" className="btn-secondery w-full my-4 flex items-center gap-4 justify-center"
					onClick={() => signIn('google', {redirect: false})}>
						<FcGoogle size={24}/>
						Register with Google
					</button>

					{/* Login Redirect */}
					<p className="text-sm text-center text-gray-600">
						Already have an account?{" "}
						<Link href="/login" className="text-(--primary-color) font-medium hover:underline">
							Login
						</Link>
					</p>
				</form>
			</section>
		</>
	);
};

export default Register;
