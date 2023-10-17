import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Main /> },
      {
        path: `/:id`,
        element: <Main />,
      },
    ],
  },
]);

export default router;
