import { useSelector, useDispatch } from "react-redux";
import {
  selectAllBlogs,
  selectCategoriesList,
} from "../store/blogs/blogsSlice";
import { useState } from "react";
import { blogAdded } from "../store/blogs/blogsSlice";
import { useNavigate } from "react-router-dom";

const defaultFormData = {
  title: "",
  content: "",
  category: "",
  img: "",
};

const NewBlogContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categoriesList = useSelector(selectCategoriesList);
  const blogs = useSelector(selectAllBlogs);

  const [formData, setFormData] = useState(defaultFormData);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(
      blogAdded(
        formData.title,
        formData.category,
        formData.content,
        formData.img
      )
    );
    setFormData(defaultFormData);

    navigate("/");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        img: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };
  return (
    <section className="Container-sm min-h-[90dvh]  overflow-hidden ">
      <h1 className="text-center text-xl font-extrabold">New Blog</h1>
      <form className="flex flex-col gap-5" onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="input input-bordered placeholder:text-slate-600"
          name="title"
          value={formData.title}
          onChange={handleOnChange}
        />
        <textarea
          placeholder="Content"
          className="textarea textarea-bordered placeholder:text-slate-600"
          name="content"
          value={formData.content}
          onChange={handleOnChange}
        ></textarea>
        <input
          type="file"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          name="img"
          onChange={handleFileChange}
        />
        <select
          className="select select-primary w-full max-w-xs"
          name="category"
          value={formData.category}
          onChange={handleOnChange}
        >
          {categoriesList.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button className="btn btn-primary">Submit</button>
      </form>
    </section>
  );
};

export default NewBlogContainer;
