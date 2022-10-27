import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Blog = () => {
	const { changeTheme } = useContext(AuthContext);
	return (
		<div className={`${changeTheme} bg-gray-900`}>
			{" "}
			<div className="px-4  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div className="grid gap-8  lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
					<div className="overflow-hidden  transition-shadow duration-300 bg-white rounded shadow-2xl">
						<img
							src="https://i.ibb.co/1Gpf7qM/download.png?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
							className="object-cover w-full h-64"
							alt=""
						/>
						<div className="p-5 border border-t-0">
							<h1
								aria-label="Category"
								title="Visit the East"
								className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
								Python Django
							</h1>
							<p className="mb-2 text-gray-700">
								Django is a high-level Python web framework that encourages
								rapid development and clean, pragmatic design. Built by
								experienced developers, it takes care of much of the hassle of
								web development, so you can focus on writing your app without
								needing to reinvent the wheel. It’s free and open source.
							</p>
							<a
								title="Learn more "
								href="https://www.djangoproject.com/"
								target={"_blank"}
								aria-label=""
								className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
								Learn more
							</a>
						</div>
					</div>
					<div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-2xl">
						<img
							src="https://www.tutorialspoint.com/php/images/php-mini-logo.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
							className="object-cover w-full h-64"
							alt=""
						/>
						<div className="p-5 border border-t-0">
							<h2
								aria-label="Category"
								title="Introducing to PHP"
								className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
								Introducing to PHP
							</h2>
							<p className="mb-2 text-gray-700">
								PHP is a server side scripting language that is embedded in
								HTML. It is used to manage dynamic content, databases, session
								tracking, even build entire e-commerce sites. It is integrated
								with a number of popular databases, including MySQL, PostgreSQL,
								Oracle, Sybase, Informix, and Microsoft SQL Server.
							</p>
							<a
								href="https://www.tutorialspoint.com/php/php_introduction.htm#:~:text=PHP%20is%20a%20server%20side,Informix%2C%20and%20Microsoft%20SQL%20Server."
								target={"_blank"}
								aria-label=""
								className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
								Learn more
							</a>
						</div>
					</div>
					<div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-2xl">
						<img
							src="https://i.ibb.co/Zz0CZh3/download-1.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
							className="object-cover w-full h-64"
							alt=""
						/>
						<div className="p-5 border border-t-0">
							<h3
								aria-label="Category"
								title="Node JS Course!"
								className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
								Node JS Course
							</h3>
							<p className="mb-2 text-gray-700">
								A Node.js course is a great way to enter into web and mobile
								development. It can be used to build apps at any scale and is
								widely used to create applications of every sort. There is a
								great need for developers with working knowledge of Nodel.js at
								companies everywhere. Join millions and begin Node.js training
								with top rated instructors on Udemy.
							</p>
							<a
								href="https://nodejs.org/en/"
								target={"_blank"}
								aria-label=""
								className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
								Learn more
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
