import React, { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
const Item = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="border  rounded shadow-sm">
			<button
				type="button"
				aria-label="Open item"
				title="Open item"
				className="flex items-center justify-between w-full p-4 focus:outline-none"
				onClick={() => setIsOpen(!isOpen)}>
				<p className="text-lg font-medium">{title}</p>
				<div className="flex items-center justify-center w-8 h-8 border rounded-full">
					<svg
						viewBox="0 0 24 24"
						className={`w-3 text-gray-600 transition-transform duration-200 ${
							isOpen ? "transform rotate-180" : ""
						}`}>
						<polyline
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeMiterlimit="10"
							points="2,7 12,17 22,7"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
			</button>
			{isOpen && (
				<div className="p-4 pt-0">
					<p className="text-gray-700">{children}</p>
				</div>
			)}
		</div>
	);
};

const FAQS = () => {
	const { changeTheme } = useContext(AuthContext);
	return (
		<div className={`bg-gray-900 ${changeTheme}`}>
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div className="max-w-xl sm:mx-auto lg:max-w-2xl">
					<div className="flex flex-col mb-16 sm:text-center">
						<a href="/" className="mb-6 sm:mx-auto">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
								<svg
									className="w-10 h-10 text-deep-purple-accent-400"
									stroke="currentColor"
									viewBox="0 0 52 52">
									<polygon
										strokeWidth="3"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									/>
								</svg>
							</div>
						</a>
						<div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
							<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-700 sm:text-4xl md:mx-auto">
								<span className="relative inline-block">
									<svg
										viewBox="0 0 52 24"
										fill="currentColor"
										className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
										<defs>
											<pattern
												id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
												x="0"
												y="0"
												width=".135"
												height=".30">
												<circle cx="1" cy="1" r=".7" />
											</pattern>
										</defs>
										<rect
											fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
											width="52"
											height="24"
										/>
									</svg>
									<span className="relative">The</span>
								</span>{" "}
								Here Are Some Faq's
							</h2>
							<p className="text-base text-gray-700 md:text-lg">
								You can give us your questions through newsletter.We will try to
								answer.
							</p>
						</div>
					</div>
					<div className="space-y-4 text-gray-400">
						<Item title="What is cors?">
							Cross-origin resource sharing is a mechanism that allows
							restricted resources on a web page to be requested from another
							domain outside the domain from which the first resource was
							served. A web page may freely embed cross-origin images,
							stylesheets, scripts, iframes, and videos.
						</Item>
						<Item title="Why are you using firebase?">
							Firebase is great for quick projects: it's easy to set up, fast,
							in many cases requires only front-end logic. It lets you focus on
							your app instead of implementing custom authentication, web
							sockets or database connections.
						</Item>
						<Item title="What other options do you have to implement authentication?">
							Common Authentication Types a) Password-based authentication.
							Passwords are the most common b)methods of authentication. ...
							c)Multi-factor authentication. ... d)Certificate-based
							authentication. ... e)Biometric authentication. ... f)Token-based
							authentication.
						</Item>
						<Item title="What is Node? How does Node work?">
							It is a used as backend service where javascript works on the
							server-side of the application. This way javascript is used on
							both frontend and backend. Node. js runs on chrome v8 engine which
							converts javascript code into machine code, it is highly scalable,
							lightweight, fast, and data-intensive.
						</Item>
						<Item title="How does the private route work?">
							The react private route component renders child components (
							children ) if the user is logged in. If not logged in the user is
							redirected to the /login page with the return url passed in the
							location state property.
						</Item>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQS;
