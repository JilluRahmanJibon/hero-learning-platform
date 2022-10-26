import React from "react";
import { Outlet } from "react-router-dom";
import RightSideCategory from "../RightSideCategory/RightSideCategory";

const Courses = () => {
	return (
		<div className="flex my-10 sm:flex-row flex-col-reverse md:justify-between px-2 lg:px-16">
			<div className="w-full ">
				<Outlet />
			</div>

			<div className="sm:pb-0 sm:w-56 pb-4 ">
				<RightSideCategory />
			</div>
		</div>
	);
};

export default Courses;
