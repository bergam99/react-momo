import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import GameBoard from "./pages/GameBoard";
import { ContextProvider } from "./store/Context";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/gameboard", element: <GameBoard /> },
]);

function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
