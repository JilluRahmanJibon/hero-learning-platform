import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About/About";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FAQS from "../Pages/FAQS/FAQS";
import Root from "../Pages/Layout/Root";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/Sign Up/SignUp";
import TermsAndConditions from "../Pages/Login/Sign Up/TermsAndConditions/TermsAndConditions";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/faqs", element: <FAQS /> },
			{ path: "/faqs", element: <FAQS /> },
			{ path: "/faqs", element: <FAQS /> },
			{ path: "/aboutUs", element: <About /> },
			{ path: "login", element: <Login /> },
			{ path: "/signup", element: <SignUp /> },
			{ path: "/terms", element: <TermsAndConditions /> },
		],
	},
]);
