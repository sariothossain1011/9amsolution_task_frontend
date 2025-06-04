import { createBrowserRouter } from "react-router-dom";
import UserDashboardPage from "../pages/dashboard/UserDashboardPage";
import SignInPage from "../pages/auth/SignInPage";
import SignUpPage from "../pages/auth/SignUpPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <UserDashboardPage></UserDashboardPage>
    },
    {
        path: "/sign-in",
        element: <SignInPage></SignInPage>
    },
    {
        path: "/sign-up",
        element: <SignUpPage></SignUpPage>
    },
]);

export default router;