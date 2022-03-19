import { Route, Routes } from "react-router-dom";
import MyLibrary from "./components/templates/MyLibrary/MyLibrary";
import Entrepreneur from "./components/templates/Entreprenuer/Entreprenuer";
import BookDetail from "./components/templates/BookDetail/BookDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MyLibrary />} />
      <Route path="/entrepreneur" element={<Entrepreneur />} />
      <Route path="/bookdetails" element={<BookDetail />} />
    </Routes>
  );
};

export default App;
