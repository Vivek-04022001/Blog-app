import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveCategory } from "../store/blogs/blogsSlice";
import { setActiveCategory } from "../store/blogs/blogsSlice";

const CategoriesFooter = () => {
  const categories = [
    "All",
    "Web Development",
    "React",
    "Node",
    "Python",
    "JavaScript",
  ];
  const activeCategory = useSelector(selectActiveCategory);

  const dispatch = useDispatch();
  const handleActiveCategory = (category) => {
    dispatch(setActiveCategory(category));
  };

  return (
    <div className="Container-sm sticky bottom-10  ">
      <div className=" bg-secondary/80 backdrop-blur-sm px-2 py-3 flex justify-around border-yellow-800 border-dashed border-2 mx-4">
        {categories.map((category) => (
          <button
            className={`btn  btn-ghost text-black
        ${activeCategory === category ? "btn-active border border-black " : ""}
        text-yellow-100 `}
            key={category}
            onClick={() => handleActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoriesFooter;
