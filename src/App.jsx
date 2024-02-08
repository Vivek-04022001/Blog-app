import Header from "./components/Header";
import CategoriesFooter from "./components/CategoriesFooter";
import BlogsContainer from "./pages/BlogsContainer";
import NewBlogContainer from "./pages/NewBlogContainer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CurrentBlog from "./pages/CurrentBlog";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Header />
        
        <Routes>
          <Route path="/" element={<BlogsContainer />} />
          <Route path="/new" element={<NewBlogContainer />} />
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path="/:blogId" element={<CurrentBlog />} />
        </Routes>
        <CategoriesFooter />
      </Router>
    </>
  );
}

export default App;
