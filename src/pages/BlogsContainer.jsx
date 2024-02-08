import React from "react";
import { useSelector } from "react-redux";
import {
  selectAllBlogs,
  selectActiveCategory,
} from "../store/blogs/blogsSlice.jsx";
import CreateNewBlogButton from "../components/CreateNewBlogButton.jsx";

const BlogsContainer = () => {
  const blogs = useSelector(selectAllBlogs);
  const activeCategory = useSelector(selectActiveCategory);
  const renderBlogs = blogs.filter(
    (blog) => activeCategory === "All" || blog.category === activeCategory
  );

  return (
    <section className="Container-sm min-h-[90dvh] px-20 outline relative ">
      <CreateNewBlogButton />
      <h1 className="text-center text-xl font-extrabold">
        {activeCategory === "All" ? "All Blogs" : `${activeCategory}`}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-between ">
        {renderBlogs.map((blog) => (
          <div
            className="max-w-[300px] card bg-white/70  shadow-xl "
            key={blog.id}
          >
            <figure>
              <img src={blog.img} className="aspect-square object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{blog.title}</h2>
              <p>
                {blog.content.length > 30
                  ? blog.content.substring(0, 100) + "..."
                  : blog.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogsContainer;
