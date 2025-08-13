import Home from "./pages/Home";
import Members from "./pages/Members";
import Rush from "./pages/Rush";
import Gallery from "./pages/Gallery";
import HouseTour from "./pages/HouseTour";

const routes = [
    {path: "/", element: <Home />},
    {path: "/members", element: <Members />},
    {path: "/rush", element: <Rush />},
    {path: "/gallery", element: <Gallery />},
    {path: "/see-our-house", element: <HouseTour />}
];

export default routes;
