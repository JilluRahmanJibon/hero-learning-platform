import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Home/Courses/Courses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FAQS from "../Pages/FAQS/FAQS";
import Root from "../Pages/Layout/Root";
import Login from "../Pages/Login/SignIn/SignIn";
import SignUp from "../Pages/Login/Sign Up/SignUp";
import TermsAndConditions from "../Pages/Login/Sign Up/TermsAndConditions/TermsAndConditions";
import Profile from "../Pages/Profile/Profile";
import PrivateRouter from "./PrivateRouter";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/courses", element: <Courses /> },
			{ path: "/faqs", element: <FAQS /> },
			{ path: "/blog", element: <Blog /> },
			{ path: "/aboutUs", element: <About /> },
			{
				path: "/profile",
				element: (
					<PrivateRouter>
						<Profile />{" "}
					</PrivateRouter>
				),
			},
			{ path: "/signin", element: <Login /> },
			{ path: "/signup", element: <SignUp /> },
			{ path: "/terms", element: <TermsAndConditions /> },
		],
	},
]);
