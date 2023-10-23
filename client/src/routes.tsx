import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, HomePage, Layout, ShopPage } from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/shop",
                element: <ShopPage />,
            },
        ],
    },
]);

export default router;
