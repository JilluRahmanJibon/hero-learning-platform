import React, { useContext, useState } from "react";
import { FaUserCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Profile = () => {
	const { user, userProfileUpdate, changeTheme } = useContext(AuthContext);
	const [checkbox, setCheckbox] = useState(true);
	const [edit, setEdit] = useState(false);
	// update user profile
	const updateProfile = e => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const photoUrl = form.photoUrl.value;
		userProfileUpdate(name, photoUrl);
	};
	return (
		<div
			className={`lg:px-16 relative bg-gray-800 px-2 text-gray-500 py-3 lg:py-14 ${changeTheme}`}>
			{" "}
			<h1 className="text-3xl border-b text-center  border-gray-400 pb-3 font-bold">
				My Proifle{" "}
			</h1>
			{user?.uid && (
				<div className="py-4  gap-16 md:flex md:px-0 px-2">
					<div>
						{user?.photoURL ? (
							<div className="flex flex-col items-center">
								<img
									className="rounded-full w-24 h-24 "
									src={user.photoURL}
									alt=""
								/>
								<button
									onClick={() => setEdit(!edit)}
									className="bg-fuchsia-400 text-gray-900 hover:bg-fuchsia-500 font-semibold shadow-lg rounded-3xl py-2 mt-3 px-3">
									Edit Profile{" "}
								</button>
							</div>
						) : (
							<div className="flex flex-col items-center">
								<FaUserCheck className=" w-14 h-14" />
								<button
									onClick={() => setEdit(!edit)}
									className="bg-fuchsia-400 text-gray-900 hover:bg-fuchsia-500 font-semibold shadow-lg rounded-3xl py-2 mt-3 px-3">
									Edit Profile{" "}
								</button>
							</div>
						)}
					</div>
					<div>
						<h1 className="text-lg pb-2 text-gray-400">Full Name </h1>
						<h4>{user?.displayName ? <>{user.displayName}</> : "N/A"}</h4>
						<h1 className="text-lg pb-2 pt-5 text-gray-400">Email Address </h1>
						<h4>{user?.email ? <>{user.email}</> : "N/A"}</h4>
					</div>
				</div>
			)}
			<div className="  ">
				{edit && (
					<div className="  border p-6 rounded border-gray-600  md:w-3/4 lg:w-1/2 mx-auto md:bottom-6 bottom-0    ">
						<h1 className="text-xl pb-6 text-center font-bold">Edit Now</h1>
						<form onSubmit={updateProfile}>
							<div>
								<label
									htmlFor="Name"
									className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
									Your Name
								</label>
								<input
									type="text"
									name="name"
									id="Name"
									placeholder=""
									defaultValue={user?.displayName}
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 font-semibold dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required
								/>
							</div>
							<div className="pt-5">
								<label
									htmlFor="photoUrl"
									className="block mb-2 text-sm font-medium  text-gray-500 dark:text-white">
									Your photoURL
								</label>
								<input
									title={user?.photoURL}
									type="text"
									name="photoUrl"
									id="photoURL"
									placeholder=""
									defaultValue={user?.photoURL}
									className="bg-gray-50 border font-semibold border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required
								/>
							</div>
							<div className="flex pt-4 pb-5 items-start">
								<div className="flex items-center h-5">
									<input
										onClick={() => {
											setCheckbox(!checkbox);
										}}
										required
										id="terms"
										aria-describedby="terms"
										type="checkbox"
										className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
									/>
								</div>
								<div className="ml-3 text-sm">
									<label
										htmlFor="terms"
										className="font-light text-gray-500 dark:text-gray-300">
										I accept the{" "}
										<Link className="font-medium text-primary-600 hover:underline dark:text-primary-500">
											Terms and Conditions
										</Link>
									</label>
								</div>
							</div>
							<button
								disabled={checkbox}
								type="submit"
								className={
									checkbox
										? "w-full text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-400   dark:focus:ring-primary-800"
										: "w-full text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 dark:focus:ring-primary-800"
								}>
								Update Profile
							</button>
						</form>
					</div>
				)}
			</div>
		</div>
	);
};

export default Profile;
