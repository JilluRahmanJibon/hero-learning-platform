import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseSummaryCard from "../CourseSummaryCard/CourseSummaryCard";

const Course = () => {
	const allCourse = useLoaderData();

	return (
		<div className="md:grid lg:grid-cols-2 xl:grid-cols-3 pr-4 md:grid-cols-2 gap-5 flex flex-col items-center">
			{allCourse.map(courseSummay => (
				<CourseSummaryCard key={courseSummay.id} courseSummay={courseSummay} />
			))}
		</div>
	);
};

export default Course;
