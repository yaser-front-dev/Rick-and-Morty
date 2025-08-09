import Home from "./components/template/Index/Home/Home"
import Details from "./components/template/Index/Details/Details"


const router = [
    {
        path: "/", element: <Home />,
        children: [
            { path: ":id", element: <Details /> }
        ]
    }
]

export default router