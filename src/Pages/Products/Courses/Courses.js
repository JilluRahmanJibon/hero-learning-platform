import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import RightSideCategory from "../RightSideCategory/RightSideCategory";

const Courses = () => {
	const { changeTheme } = useContext(AuthContext);
	return (
		<div className={`${changeTheme} bg-gray-800`}>
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
