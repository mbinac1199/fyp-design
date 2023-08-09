import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Listing from "./components/Listing/Listing";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listing />} />
      </Routes>
    </>
  );
}
