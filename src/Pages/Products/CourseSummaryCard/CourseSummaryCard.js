import React from "react";
import { Link } from "react-router-dom";

const CourseSummaryCard = ({ courseSummay }) => {
	const { id, cover, details, coursesName } = courseSummay;

	return (
		<div>
			<div className="rounded-lg shadow-lg md:mt-0 mt-6 sm:mr-2 bg-white sm:max-w-lg max-w-md px-2 sm:px-0">
				<Link title="Click for details" to={`/courses/courseDetails/${id}`}>
					<img
						className="rounded-t-2xl sm:rounded-t-lg  sm:pt-0 pt-2 h-72 w-full"
						src={cover}
						alt=""
					/>
				</Link>
				<div className="p-6">
					<h5 className="text-gray-900 text-xl font-medium mb-2">
						{coursesName}
					</h5>
					<p className="text-gray-700 text-base mb-4">
						{details.slice(0, 160) + "..."}
					</p>
					<Link
						title="Click for details"
						to={`/courses/courseDetails/${id}`}
						type="button"
						className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
						More Info
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CourseSummaryCard;
