import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaGithub, FaTimes } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const SignIn = () => {
	// show password state
	const [show, setShow] = useState(false);
	const [showPassword, setShowPassword] = useState("password");

	// user info state
	const [userInfo, setUserInfo] = useState({
		email: "",
		password: "",
	});
	// error state
	const [errors, setErrors] = useState({
		email: "",
		password: "",
		fireError: "",
	});
	const {
		continueWithGoogle,
		continueWithGithub,
		logInWithEmailAndPassword,
		userPasswordReset,
		setLoading,
	} = useContext(AuthContext);

	const location = useLocation();
	const from = location.state?.from?.pathname || "/";
	const navigate = useNavigate();
	// sign in with google
	const signInWithgoogle = () => {
		continueWithGoogle()
			.then(result => {
				const user = result.user;

				navigate(from, { replace: true });
				toast.success("Successfully sign in", {
					duration: 3000,
					position: "top-center",
				});
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
				navigate(from, { replace: true });
				toast.success("Successfully sign in", {
					duration: 3000,
					position: "top-center",
				});
			})
			.catch(error => {
				console.error(error);
			});
	};

	// sign in with email and password
	const signInWithEmailAndPassword = e => {
		e.preventDefault();

		logInWithEmailAndPassword(userInfo.email, userInfo.password)
			.then(result => {
				const user = result.user;
				navigate(from, { replace: true });
				toast.success("Successfully sign in", {
					duration: 3000,
					position: "top-center",
				});
			})
			.catch(error => {
				setLoading(false);
				setErrors({ ...errors, fireError: error.message });
			});
		setErrors({ ...errors, fireError: "" });
	};
	// handle email on change
	const handleEmailOnChange = e => {
		const email = e.target.value;
		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			setErrors({ ...errors, email: "please provide a valid email" });
			setUserInfo({ ...userInfo, email: "" });
		} else {
			setErrors({ ...errors, email: "" });
			setUserInfo({ ...userInfo, email: email });
		}
	};
	// handle password on change
	const handlePasswordChange = e => {
		const password = e.target.value;
		if (password.length < 6) {
			setErrors({ ...errors, password: "password must be 6 characters " });
			setUserInfo({ ...userInfo, password: "" });
		} else {
			setErrors({ ...errors, password: "" });
			setUserInfo({ ...userInfo, password: password });
		}
	};

	// forgot password
	const forgotPassword = () => {
		userPasswordReset(userInfo.email)
			.then(result => {
				toast.success(
					"Reset your password , please check your email and set new password",
					{
						position: "top-center",
						duration: 5000,
					}
				);
			})
			.catch(error => {});
	};
	return (
		<div>
			<section className="bg-gray-50 dark:bg-gray-900">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
						{errors.fireError && (
							<p className=" text-center text-red-400">{errors.fireError}</p>
						)}
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
								Sign in to your account
							</h1>
							<div className="flex flex-col md:flex-row gap-3">
								<button
									onClick={signInWithgoogle}
									className=" w-full py-2 flex justify-center items-center gap-1 px-1 text-gray-500 border-gray-500 rounded-lg hover:bg-gray-700 hover:text-white transition-all border">
									<FcGoogle className="text-xl lg:text-2xl" />{" "}
									<span>Sign in with Google</span>
								</button>{" "}
								<button
									onClick={signInWithGithub}
									className=" w-full py-2 flex justify-center items-center gap-1 px-1 text-gray-500 border-gray-500 rounded-lg hover:bg-gray-700 hover:text-white transition-all border">
									<FaGithub className="text-xl lg:text-2xl" /> Sign in with
									Github
								</button>
							</div>
							<div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-400 before:mt-0.5 after:flex-1 after:border-t after:border-gray-400 after:mt-0.5">
								<p className="text-center text-gray-300  font-bold mx-4 mb-0">
									Or
								</p>
							</div>
							<form
								className="space-y-4 md:space-y-6"
								onSubmit={signInWithEmailAndPassword}>
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
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="name@example.com"
										required
									/>
									{errors.email && (
										<p className="flex items-center gap-1 text-red-400">
											<FaTimes className="mt-2" />
											{errors.email}
										</p>
									)}
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
									{errors.password && (
										<p className="flex items-center gap-1 text-red-400">
											<FaTimes className="mt-2" />
											{errors.password}
										</p>
									)}
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
									<Link onClick={forgotPassword} className="text-red-400">
										Forgot password?
									</Link>
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
