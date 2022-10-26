import React from "react";

const CourseSummaryCard = ({ courseSummay }) => {
	const {
		id,
		cover,
		details,
		videos,
		ratings,
		coursesName,
		mentor,
		mentor_img,
		priceAll,
		totalTime,
		pricePer,
	} = courseSummay;

	return (
		<div>
			<div>
				<div className="rounded-lg shadow-lg  bg-white sm:max-w-sm px-2 sm:px-0">
					<a href="#!">
						<img className="rounded-t-lg h-72 w-full" src={cover} alt="" />
					</a>
					<div className="p-6">
						<h5 className="text-gray-900 text-xl font-medium mb-2">
							{coursesName}
						</h5>
						<p className="text-gray-700 text-base mb-4">
							{details.slice(0, 160) + "..."}
						</p>
						<button
							type="button"
							className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
							Button
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseSummaryCard;
