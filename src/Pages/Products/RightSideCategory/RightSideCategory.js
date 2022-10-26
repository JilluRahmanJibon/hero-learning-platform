import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const RightSideCategory = () => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		fetch("http://localhost:9000/course_categories")
			.then(res => res.json())
			.then(data => setCategories(data));
	}, []);

	return (
		<div className="text-gray-500">
			<h1 className="text-xl font-bold ">All Categories </h1>
			{categories.map(category => (
				<div key={category.id}>
					<NavLink
						style={({ isActive }) =>
							isActive ? { color: "white" } : undefined
						}
						className="hover:text-white block"
						to={`/courses/category/${category.id}`}>
						{category.name}
					</NavLink>
				</div>
			))}
			<NavLink
				style={({ isActive }) => (isActive ? { color: " " } : { color: "red" })}
				to="/courses/"
				className="hover:text-white block">
				All Category
			</NavLink>
		</div>
	);
};

export default RightSideCategory;
