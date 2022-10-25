import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaGithub, FaTimes } from "react-icons/fa";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
const SignUp = () => {
	// terms and conditions state
	const [checkbox, setCheckbox] = useState(true);
	// show password state
	const [show, setShow] = useState(false);
	const [showPassword, setShowPassword] = useState("password");
	// user info state
	const [userInfo, setUserInfo] = useState({
		email: "",
		password: "",
	});
	// error state
	const [error, setError] = useState();
	const {
		continueWithGoogle,
		continueWithGithub,
		createUserWithEmailAndPass,
		userProfileUpdate,
	} = useContext(AuthContext);
	const navigate = useNavigate();

	// sign up with google
	const signUpWithGoogle = () => {
		continueWithGoogle()
			.then(result => {
				const user = result.user;
				navigate("/");
				console.log(user);
			})
			.catch(error => {
				console.error(error);
			});
	};

	// sign up with github
	const signUpWithGithub = () => {
		continueWithGithub()
			.then(result => {
				const user = result.user;
				navigate("/");
				console.log(user);
			})
			.catch(error => {
				console.error(error);
			});
	};
	// create user
	const createUser = e => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
	};
	const handleEmailOnChange = e => {
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test.e.target.value) {
			console.log(userInfo.email);
		}
		setUserInfo({ ...userInfo, email: e.target.value });

		// console.log(userInfo.email);
	};
	const handlePasswordChange = e => {
		const password = e.target.value;
		if (password.length < 6) {
			setError("your password must be 6 characters ");
		}
		setUserInfo({ ...userInfo, password: password });

		console.log(userInfo.password);
	};
	return (
		<div>
			<section className="bg-gray-50 dark:bg-gray-900">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
						<div className="p-6 space-y-4 md:space-y-6 ">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
								Create and account
							</h1>
							<div className="flex flex-col md:flex-row gap-3">
								<button
									onClick={signUpWithGoogle}
									className=" w-full py-2 flex justify-center items-center gap-1 px-1 text-gray-300 border-gray-500 rounded-lg hover:bg-gray-700 hover:text-white transition-all border">
									<FcGoogle className="text-xl lg:text-2xl" />{" "}
									<span>Sign up with Google</span>
								</button>{" "}
								<button
									onClick={signUpWithGithub}
									className=" w-full py-2 flex justify-center items-center gap-1 px-1 text-gray-300 border-gray-500 rounded-lg hover:bg-gray-700 hover:text-white transition-all border">
									<FaGithub className="text-xl lg:text-2xl" /> Sign up with
									Github
								</button>
							</div>
							<div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-400 before:mt-0.5 after:flex-1 after:border-t after:border-gray-400 after:mt-0.5">
								<p className="text-center text-gray-300  font-bold mx-4 mb-0">
									Or
								</p>
							</div>

							<form onSubmit={createUser} className="space-y-4 md:space-y-6">
								<div>
									<label
										htmlFor="name"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Your name
									</label>
									<input
										type="text"
										name="name"
										id="name"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder=" Your name"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Your email
									</label>
									<input
										onChange={handleEmailOnChange}
										type="email"
										name="email"
										id="email"
										value={userInfo.email}
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="name@example.com"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="password"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Password
									</label>
									<div className="flex  relative items-center">
										<input
											onChange={handlePasswordChange}
											value={userInfo.password}
											type={showPassword}
											name="password"
											id="password"
											placeholder="••••••••"
											className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											required
										/>

										<div
											onClick={() => setShow(!show)}
											className="absolute right-2">
											{show ? (
												<FaEye
													onClick={() => setShowPassword("password")}
													className="text-gray-400  "
												/>
											) : (
												<FaEyeSlash
													onClick={() => setShowPassword("text")}
													className="text-gray-400  "
												/>
											)}
										</div>
									</div>
									<p className="flex items-center gap-1 text-red-400">
										<FaTimes className="mt-2" />
										{error}
									</p>
								</div>

								<div className="flex items-start">
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
											<Link
												className="font-medium text-primary-600 hover:underline dark:text-primary-500"
												to="/terms">
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
									Create an account
								</button>

								<p className="text-sm font-light text-gray-500 dark:text-gray-400">
									Already have an account?{" "}
									<Link
										to="/signin"
										className="font-medium   hover:underline  ">
										Login here
									</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SignUp;
