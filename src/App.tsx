import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import MyLibrary from "./components/templates/MyLibrary/MyLibrary";
import Entrepreneur from "./components/templates/Entreprenuer/Entreprenuer";
import BookDetail from "./components/templates/BookDetail/BookDetail";
import theme from "../src/components/theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<MyLibrary />} />
        <Route path="/entrepreneur" element={<Entrepreneur />} />
        <Route path="/bookdetails" element={<BookDetail />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
