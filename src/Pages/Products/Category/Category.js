import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseSummaryCard from "../CourseSummaryCard/CourseSummaryCard";

const Category = () => {
	const allCategory = useLoaderData();

	return (
		<div className="flex justify-center">
			<CourseSummaryCard courseSummay={allCategory} />{" "}
		</div>
	);
};

export default Category;
