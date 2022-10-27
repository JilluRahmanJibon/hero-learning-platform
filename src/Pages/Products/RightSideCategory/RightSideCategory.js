import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const RightSideCategory = () => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		fetch("https://aissignment-server.vercel.app/course_categories")
			.then(res => res.json())
			.then(data => setCategories(data));
	}, []);

	return (
		<div className="text-gray-500 lg:mb-0 lg:text-left text-center mb-8 lg:ml-0 ml-4">
			<h1 className="text-xl font-bold lg:pl-3 ">All Categories </h1>
			{categories.map(category => (
				<div key={category.id}>
					<div className="flex lg:flex-none justify-center">
						<NavLink
							className={({ isActive }) =>
								isActive
									? "text-white block bg-transparent bg-violet-700  transition-all font-semibold  py-2 px-4 border border-blue-500 hover:border-transparent rounded my-3 ml-3 lg:w-80 w-3/4  shadow-md"
									: "hover:text-white block bg-transparent hover:bg-violet-700 text-blue-700 font-semibold   py-2 px-4 border border-blue-500 hover:border-transparent rounded my-3 ml-3 lg:w-80 w-3/4  shadow-md"
							}
							to={`/courses/category/${category.id}`}>
							{category.name}
						</NavLink>
					</div>
				</div>
			))}
			<div className="flex lg:flex-none justify-center">
				<NavLink
					style={({ isActive }) =>
						isActive ? { color: " " } : { color: "red" }
					}
					to="/courses/"
					className="hover:text-white block bg-transparent hover:bg-violet-700 text-blue-700 font-semibold   py-2 px-4 border border-blue-500 hover:border-transparent rounded my-3 ml-3 lg:w-80 w-3/4  shadow-md">
					All Category
				</NavLink>
			</div>
		</div>
	);
};

export default RightSideCategory;
