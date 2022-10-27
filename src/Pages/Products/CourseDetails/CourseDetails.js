import React, { useRef } from "react";
import {
	FaFileDownload,
	FaLock,
	FaMoneyBillAlt,
	FaStar,
	FaVideo,
} from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const CourseDetails = () => {
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
	} = useLoaderData();
	const componentRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});
	return (
		<div>
			<div className="flex justify-center">
				<div className="rounded-lg md:mt-0 mt-6 shadow-lg  bg-white  xl:max-w-xl  sm:max-w-lg max-w-md px-2 sm:px-0">
					<div ref={componentRef}>
						<img
							className="rounded-t-2xl sm:rounded-t-lg  sm:pt-0 pt-2 h-72 w-full"
							src={cover}
							alt=""
						/>
						<div className="px-4  pt-1">
							<div className="sm:flex gap-2 border-b-2 pb-1 border-gray-100  justify-between">
								<p title="Ratings" className="flex items-center gap-1">
									<span className="font-semibold">Ratings: </span>
									<span className="font-bold">{ratings}</span>{" "}
									<FaStar className="text-orange-500 pt-1" />
								</p>
								<p title="Videos" className="flex items-center gap-1">
									<span className="font-semibold">Videos: </span>
									<span className="font-bold">{videos}</span>{" "}
									<FaVideo className="text-blue-500 pt-1" />
								</p>
								<p title="Total Time" className="flex items-center gap-1">
									<span className="font-semibold">Time: </span>
									<span className="font-bold">{totalTime}</span>{" "}
									<AiOutlineClockCircle className="pt-1 text-gray-900" />
								</p>
							</div>
							<div className="sm:flex gap-2 border-b-2 border-gray-100 pb-1 pt-4 justify-between">
								<p title="Total price" className="flex items-center gap-1">
									<span className="font-semibold">Total price: </span>
									<span className="font-bold">{priceAll}</span>{" "}
									<FaMoneyBillAlt className="pt-1 text-orange-500" />
								</p>
								<p title="Price per month" className="flex items-center gap-1">
									<span className="font-semibold">Price: </span>
									<span className="font-bold">{pricePer}</span>{" "}
									<FaMoneyBillAlt className="pt-1 text-orange-500" />
								</p>
							</div>
						</div>

						<div className="p-6">
							<h5 className="text-gray-900 text-xl text-center font-medium mb-2">
								{coursesName}
							</h5>
							<p className="text-gray-700 text-justify text-base mb-4">
								{details}
							</p>

							<div className="flex sm:pt-3  pt-10 flex-col items-center">
								<img
									title="Mentor"
									className=" w-28 rounded-full"
									src={mentor_img}
									alt=""
								/>
								<h1 title="mentor" className="font-bold pb-2">
									{mentor}
								</h1>
							</div>
						</div>
					</div>
					<div className="sm:flex pt-4 border-t-2 p-4  justify-between">
						<Link
							onClick={handlePrint}
							title="Download pdf"
							type="button"
							className=" flex mb-2 sm:mb-0 gap-2 px-4 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-lime-900 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
							<FaFileDownload /> Download pdf
						</Link>
						<Link
							to={`/premiumAccess/${id}`}
							title="Get premium Access"
							type="button"
							className=" flex gap-2 px-4 border border-lime-600  py-2.5 bg-transparent  hover:text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-lime-900 hover:shadow-lg focus:bg-lime-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lime-900 active:shadow-lg transition duration-150 ease-in-out">
							<FaLock /> premium Access
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseDetails;
