import Header from "./components/Header";
import CategoriesFooter from "./components/CategoriesFooter";
import BlogsContainer from "./pages/BlogsContainer";
import NewBlogContainer from "./pages/NewBlogContainer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>

          <Route path="/" element={<BlogsContainer />} />
          <Route path="/new" element={<NewBlogContainer />} />
        </Routes>
      <CategoriesFooter />
      </Router>
    </>
  );
}

export default App;
