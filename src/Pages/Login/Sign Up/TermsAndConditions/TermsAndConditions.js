import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";

const TermsAndConditions = () => {
	const { changeTheme } = useContext(AuthContext);
	return (
		<div className={`text-center py-36 text-gray-500 ${changeTheme} `}>
			<h1 className="uppercase font-semibold lg:text-5xl md:text-4xl sm:text-3xl">
				Thanks for clicking this page.
			</h1>
			<Link
				title="Go back sign up page"
				className="bg-purple-500 px-6 text-black uppercase font-semibold hover:bg-purple-600 rounded mt-4 py-2 inline-block"
				to="/signup">
				go back{" "}
			</Link>
		</div>
	);
};

export default TermsAndConditions;
