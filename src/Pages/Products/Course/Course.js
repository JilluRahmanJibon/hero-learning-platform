import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseSummaryCard from "../CourseSummaryCard/CourseSummaryCard";

const Course = () => {
	const allCourse = useLoaderData();
	console.log();
	return (
		<div className="grid lg:grid-cols-3 pr-4 md:grid-cols-2 gap-5">
			{allCourse.map(courseSummay => (
				<CourseSummaryCard key={courseSummay.id} courseSummay={courseSummay} />
			))}
		</div>
	);
};

export default Course;
