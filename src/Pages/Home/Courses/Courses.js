import React from "react";
import { Outlet } from "react-router-dom";
import RightSideCategory from "../RightSideCategory/RightSideCategory";

const Courses = () => {
	return (
		<div className="flex my-10 justify-between px-2 lg:px-16">
			<div>
				<Outlet />
			</div>

			<div>
				<RightSideCategory />
			</div>
		</div>
	);
};

export default Courses;
