import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}