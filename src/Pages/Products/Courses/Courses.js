import React from "react";
import { Outlet } from "react-router-dom";
import RightSideCategory from "../RightSideCategory/RightSideCategory";

const Courses = () => {
	return (
		<div className=" bg-gray-800">
			<div className="flex py-10 lg:flex-row  flex-col-reverse md:justify-between px-2 lg:px-16">
				<div className="w-full  ">
					<Outlet />
				</div>

				<div className="sm:pb-0 lg:w-80 w-full  ">
					<RightSideCategory />
				</div>
			</div>
		</div>
	);
};

export default Courses;
