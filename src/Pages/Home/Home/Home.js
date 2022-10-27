import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Home = () => {
	const { changeTheme } = useContext(AuthContext);
	return (
		<div className="">
			<div
				className={`relative  bg-gray-800 ${changeTheme} flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 `}>
				<div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
					<div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
						<div className="max-w-xl mb-6">
							<div>
								<p
									className={`inline-block   text-slate-400 px-3 py-px mb-4 text-xs font-semibold tracking-wider   uppercase rounded-full bg-teal-accent-400`}>
									New Colaboration
								</p>
							</div>
							<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-400 sm:text-4xl sm:leading-none">
								<span className="pr-2 md:pr-0">Welcome to Our</span>
								<br className="hidden md:block" />
								Hero{" "}
								<span className="inline-block text-deep-purple-accent-400">
									Learning Platform
								</span>
							</h2>
							<p className="text-base  text-gray-500 md:text-lg">
								Learn Effectively that will take you towards your goal. Complete
								Web Development Course with{" "}
								<a
									title="if you want to interested please visit here or click now, https://web.programming-hero.com"
									href="https://web.programming-hero.com"
									target={"_blank"}>
									<span className="text-red-400 font-semibold italic">
										Jhankar Mahbub
									</span>
								</a>
								. Got stuck? We will always be there for you. We will ensure our
								graduates are world-class web developer. Master everything you
								need to become a web developer. Start your dream today. Conquer
								the world.
							</p>
						</div>
						<div className="flex flex-col items-center md:flex-row">
							<Link
								title="Continue with our premium courses"
								to="/courses"
								className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide bg-gray-800 text-white transition duration-200 rounded  shadow md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-gray-600 shadow-white focus:shadow-outline focus:outline-none">
								Get started <FaArrowRight className="pt-1 pl-2 text-xl" />
							</Link>
							<Link
								title="Learn more and details"
								to="/blog"
								aria-label=""
								className="inline-flex items-center font-semibold text-gray-500  hover:text-zinc-400 transition-colors duration-200 hover:text-deep-purple-accent-700">
								Learn more
							</Link>
						</div>
					</div>
				</div>
				<div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto py-10 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
					<img
						className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
						src="https://i.ibb.co/Trz1z1w/home-page.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
