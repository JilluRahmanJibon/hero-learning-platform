import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const SignIn = () => {
	// show password state
	const [show, setShow] = useState(false);
	const [showPassword, setShowPassword] = useState("password");
	const {
		continueWithGoogle,
		continueWithGithub,
		logInWithEmailAndPassword,
		user,
	} = useContext(AuthContext);
	const navigate = useNavigate();
	// sign in with google
	const signInWithgoogle = () => {
		continueWithGoogle()
			.then(result => {
				const user = result.user;
				console.log(user);
				navigate("/");
			})
			.catch(error => {
				console.error(error);
			});
	};
	// sign in with github
	const signInWithGithub = () => {
		continueWithGithub()
			.then(result => {
				const user = result.user;
				console.log(user);
				navigate("/");
			})
			.catch(error => {
				console.error(error);
			});
	};
	return (
		<div>
			<section className="bg-gray-50 dark:bg-gray-900">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
								Sign in to your account
							</h1>
							<div className="flex flex-col md:flex-row gap-3">
								<button
									onClick={signInWithgoogle}
									className=" w-full py-2 flex justify-center items-center gap-1 px-1 text-gray-300 border-gray-500 rounded-lg hover:bg-gray-700 hover:text-white transition-all border">
									<FcGoogle className="text-xl lg:text-2xl" />{" "}
									<span>Sign in with Google</span>
								</button>{" "}
								<button
									onClick={signInWithGithub}
									className=" w-full py-2 flex justify-center items-center gap-1 px-1 text-gray-300 border-gray-500 rounded-lg hover:bg-gray-700 hover:text-white transition-all border">
									<FaGithub className="text-xl lg:text-2xl" /> Sign in with
									Github
								</button>
							</div>
							<div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-400 before:mt-0.5 after:flex-1 after:border-t after:border-gray-400 after:mt-0.5">
								<p className="text-center text-gray-300  font-bold mx-4 mb-0">
									Or
								</p>
							</div>
							<form className="space-y-4 md:space-y-6" action="#">
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Your email
									</label>
									<input
										type="email"
										name="email"
										id="email"
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
								</div>
								<div className="flex justify-between items-center mb-6">
									<div className="form-group form-check">
										<input
											type="checkbox"
											className="  h-4 w-4 border border-gray-300 rounded-sm bg-white  focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
											id="exampleCheck2"
										/>
										<label
											className="form-check-label text-gray-500 inline-block  "
											htmlFor="exampleCheck2">
											Remember me
										</label>
									</div>
									<Link className="text-red-400">Forgot password?</Link>
								</div>

								<button
									type="submit"
									className="w-full text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 dark:focus:ring-primary-800">
									Sign in
								</button>
								<p className="text-sm font-light text-gray-500 dark:text-gray-400">
									Don't have an account?{" "}
									<Link
										to="/signup"
										className="font-medium   hover:underline  ">
										Sign up
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

export default SignIn;
