import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { ContextProvider } from "./store/Context";
import GameBoard from "./pages/GameBoard/GameBoard";

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
