import React, { useContext, useState } from "react";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { FcHome } from "react-icons/fc";

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
const Header = () => {
	const { user } = useContext(AuthContext);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [openProfile, setOpenProfile] = useState(false);

	return (
		<div className="bg-gray-900">
			<div className="px-2 py-5 relative mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				<div className="relative flex items-center justify-between">
					<Link
						to="/"
						aria-label="Home"
						title="Home"
						className="inline-flex items-center">
						<FcHome className="md:text-3xl text-xl" />
						<span className="ml-2 md:text-xl font-semibold md:font-bold tracking-wide text-gray-100 uppercase">
							Hero platform
						</span>
					</Link>
					<ul className="flex items-center hidden space-x-8 lg:flex">
						<li>
							<NavLink
								style={({ isActive }) =>
									isActive ? { color: "red" } : undefined
								}
								to="/courses"
								aria-label="Our Courses"
								title="Our Courses"
								className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
								Courses
							</NavLink>
						</li>

						<li>
							<NavLink
								style={({ isActive }) =>
									isActive ? { color: "red" } : undefined
								}
								to="/faqs"
								aria-label="FAQs"
								title="FAQs"
								className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400">
								FAQ
							</NavLink>
						</li>
						<li>
							<NavLink
								style={({ isActive }) =>
									isActive ? { color: "red" } : undefined
								}
								to="/blog"
								aria-label="Blog"
								title="Blog"
								className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
								Blog
							</NavLink>
						</li>
						<li>
							<NavLink
								style={({ isActive }) =>
									isActive ? { color: "red" } : undefined
								}
								to="aboutUs"
								aria-label="About us"
								title="About us"
								className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
								About us
							</NavLink>
						</li>
					</ul>

					<div className="flex items-center gap-2">
						{user?.uid ? undefined : (
							<ul className="flex items-center hidden space-x-8 lg:flex">
								<li>
									<Link
										to="/signin"
										className="inline-flex bg-gray-800 hover:bg-gray-700 items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
										aria-label="Sign in"
										title="Sign in">
										Sign in
									</Link>
								</li>
							</ul>
						)}
						<div className="lg:hidden">
							<button
								aria-label="Open Menu"
								title="Open Menu"
								className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
								onClick={() => setIsMenuOpen(true)}>
								<FaBars className="text-gray-500" />
							</button>
							{isMenuOpen && (
								<div className="absolute top-0 left-0 w-full">
									<div className="p-5 bg-white border rounded shadow-sm">
										<div className="flex items-center justify-between mb-4">
											<div>
												<Link
													to="/"
													aria-label="Home"
													title="Home"
													className="inline-flex items-center">
													<FcHome className="text-2xl lg:text-3xl" />
													<span className="ml-2  md:text-xl font-bold tracking-wide text-gray-900 uppercase">
														Hero platform
													</span>
												</Link>
											</div>
											<div>
												<button
													aria-label="Close Menu"
													title="Close Menu"
													className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
													onClick={() => setIsMenuOpen(false)}>
													<span className="text-xl font-semibold text-gray-600">
														X
													</span>
												</button>
											</div>
										</div>
										<nav>
											<ul className="  space-y-4">
												<li className="w-full">
													<NavLink
														style={({ isActive }) =>
															isActive ? { color: "red" } : undefined
														}
														to="/courses"
														aria-label="Our Courses"
														title="Our Courses"
														className="font-medium w-full block tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
														Courses
													</NavLink>
												</li>

												<li>
													<NavLink
														style={({ isActive }) =>
															isActive ? { color: "red" } : undefined
														}
														to="/faqs"
														aria-label=""
														title=""
														className="font-medium block tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
														FAQ
													</NavLink>
												</li>
												<li>
													<NavLink
														style={({ isActive }) =>
															isActive ? { color: "red" } : undefined
														}
														to="/blog"
														aria-label="Blog"
														title="Blog"
														className="font-medium  block tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
														Blog
													</NavLink>
												</li>
												<li>
													<NavLink
														style={({ isActive }) =>
															isActive ? { color: "red" } : undefined
														}
														to="/aboutUs"
														aria-label="About us"
														title="About us"
														className="font-medium block tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
														About us
													</NavLink>
												</li>
												{user?.uid ? undefined : (
													<li>
														<Link
															to="/signin"
															className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-gray-800 text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
															aria-label="Sign in"
															title="Sign in">
															Sign in
														</Link>
													</li>
												)}
											</ul>
										</nav>
									</div>
								</div>
							)}
						</div>
						<Link onClick={() => setOpenProfile(!openProfile)} title="Profile">
							{user?.uid ? (
								<img
									className="w-10 h-10 rounded-full"
									src={user?.photoURL}
									alt=""
								/>
							) : (
								<FaUserAlt className="w-7 h-7 text-gray-500" />
							)}
						</Link>
					</div>
				</div>
				{openProfile ? (
					<div className="absolute  right-10 bg-gray-100 w-56 top-16 rounded-lg ">
						<div className="flex flex-col items-center  py-2 border-b-2 border-gray-300 justify-center">
							{user?.uid ? (
								<img
									className="w-16 h-16 rounded-full"
									src={user?.photoURL}
									alt=""
								/>
							) : (
								<FaUserAlt className="w-7 h-7 text-gray-500" />
							)}
							<h1 className="font-bold pt-2">
								{user?.uid ? user.displayName : "N/A"}
							</h1>
							<Link
								to="/profile"
								className="bg-fuchsia-400 hover:bg-fuchsia-500 font-semibold shadow-lg rounded-3xl py-2 mt-3 px-3">
								View Profile
							</Link>
						</div>
						<div>fjdfjskl</div>
					</div>
				) : undefined}
			</div>
		</div>
	);
};

export default Header;
