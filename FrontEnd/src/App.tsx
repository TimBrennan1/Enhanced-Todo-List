import Homepage from "./pages/Homepage";
import Error from "./pages/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ToDo from "./pages/ToDo";
import Calender from "./pages/Calender";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "list", element: <ToDo /> },
      { path: "calender", element: <Calender /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
