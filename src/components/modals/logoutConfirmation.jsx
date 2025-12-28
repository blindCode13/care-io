"use client";

import {FaSignOutAlt} from 'react-icons/fa';
import {toast} from 'react-toastify';

const LogoutConfirmation = ({setShowModal, logOut}) => {
	return (
		<div className="fixed inset-0 bg-gray-800/40 backdrop-blur-[1px] flex items-center justify-center z-60">
			<div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-md relative">
				<div className="text-center">
					<div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-(--primary-color)/10">
						<FaSignOutAlt className="text-(--primary-color) text-2xl"/>
					</div>

					<h2 className="text-xl font-semibold text-gray-800 mb-2">
						Log Out
					</h2>
					<p className="text-gray-600 mb-6">
						Are you sure you want to Log out of your account?
					</p>

					<div className="flex justify-center gap-3">
						<button className="btn-secondery cursor-pointer"
							onClick={
								() => setShowModal(false)
						}>
							Cancel
						</button>
						<button className="btn-primary cursor-pointer"
							onClick={() => {
                                logOut().then(() => {
                                    setShowModal(false);
                                    toast.success("Logged out successfully");
									window.location.href = "/"
                                })
                                .catch(err => toast.error(err.message));
                                }}>
							Log Out
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LogoutConfirmation;
