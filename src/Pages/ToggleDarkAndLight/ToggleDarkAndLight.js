import React from "react";
import { useState } from "react";

const ToggleDarkAndLight = () => {
	const [selected, setSelected] = useState(true);
	return (
		<div className="flex items-center">
			<div
				onClick={() => setSelected(!selected)}
				className={
					("flex w-20 bg-gray-500 m-10 rounded-full transition-all duration-500",
					{
						"bg-green-500 ": selected,
					})
				}>
				<span
					className={
						("w-10 h-10 bg-white rounded-full transition-all duration-500 shadow-lg",
						{
							"ml-10": selected,
						})
					}
				/>
			</div>
			<div className="text-black font-semibold ">
				{selected ? "Light" : "Dark"}
			</div>
		</div>
	);
};

export default ToggleDarkAndLight;
