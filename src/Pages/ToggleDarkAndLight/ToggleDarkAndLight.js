import React from "react";
import { useState } from "react";
import classNames from "classnames";

const ToggleDarkAndLight = () => {
	const [selected, setSelected] = useState(true);
	return (
		<div className="flex items-center">
			<div
				onClick={() => setSelected(!selected)}
				className={classNames(
					"flex w-20 bg-gray-500 m-10 rounded-full transition-all duration-500",
					{
						"bg-green-500 ": selected,
					}
				)}>
				<span
					className={classNames(
						"w-10 h-10 bg-white rounded-full transition-all duration-500 shadow-lg",
						{
							"ml-10": selected,
						}
					)}
				/>
			</div>
			<div className="text-black font-semibold ">
				{selected ? "Light" : "Dark"}
			</div>
		</div>
	);
};

export default ToggleDarkAndLight;
