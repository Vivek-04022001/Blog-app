import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { selectAllBlogs, deleteBlog } from "../store/blogs/blogsSlice";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import Highlighter from "react-highlight-words";

const defaultSearch = {
  id: "",
  title: "",
  category: "",
};

const Dashboard = () => {
  const dispatch = useDispatch();
  const [selectedRows, setSelectedRows] = useState([]);
  const blogs = useSelector(selectAllBlogs);
  const [configRows, setConfigRows] = useState(blogs);
  const [configType, setConfigType] = useState("");
  const [search, setSearch] = useState(defaultSearch);

  const handleConfigRows = (type) => {
    if (configType === type) {
      setConfigRows(blogs);
      setConfigType("");
    } else {
      const sortedBlogs = blogs
        .slice()
        .sort((a, b) => {
          const valueA = a[type].toUpperCase();
          const valueB = b[type].toUpperCase();
          if (valueA < valueB) {
            return -1;
          }
          if (valueA > valueB) {
            return 1;
          }
          return 0;
        })
        .map((blog) => {
          return blog;
        });
      setConfigRows(sortedBlogs);
      setConfigType(type);
    }
  };

  const handleSelectedRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((row) => row !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleDeleteBlog = (id) => {
    dispatch(deleteBlog(id));
  };

  const handleSelectAllRows = () => {
    if (selectedRows.length === blogs.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(blogs.map((blog) => blog.id));
    }
  };

  const handleSearch = (e) => {
    setSearch({ ...search, [e.target.id]: e.target.value });
    const filteredBlogs = blogs.filter((blog) =>
      blog[e.target.id].toLowerCase().includes(e.target.value.toLowerCase())
    );
    setConfigRows(filteredBlogs);
  };

  return (
    <section className="Container">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    onClick={handleSelectAllRows}
                    checked={selectedRows.length === blogs.length}
                  />
                </label>
              </th>
              <th
                className={`${
                  configType === "id" && "bg-base-200"
                }  cursor-pointer`}
              >
                <span className="flex gap-2">
                  Id
                  <FaFilter onClick={() => handleConfigRows("id")} />
                </span>

                <input
                  id="id"
                  type="text"
                  placeholder="search for Id"
                  onChange={(e) => handleSearch(e)}
                  value={search.id}
                  className="input input-xs input-bordered w-full max-w-xs block mt-2"
                />
              </th>
              <th
                className={`${
                  configType === "title" && "bg-base-200"
                }  cursor-pointer`}
              >
                <span className="flex gap-2">
                  Title
                  <FaFilter onClick={() => handleConfigRows("title")} />
                </span>
                <input
                  id="title"
                  type="text"
                  placeholder="search for Title"
                  onChange={(e) => handleSearch(e)}
                  value={search.title}
                  className="input input-xs input-bordered w-full max-w-xs block mt-2"
                />
              </th>
              <th
                className={`${
                  configType === "category" && "bg-base-200"
                }  cursor-pointer`}
              >
                <span className="flex gap-2">
                  Category
                  <FaFilter onClick={() => handleConfigRows("category")} />
                </span>
                <input
                  id="category"
                  type="text"
                  placeholder="search for Category"
                  onChange={(e) => handleSearch(e)}
                  value={search.category}
                  className="input input-xs input-bordered w-full max-w-xs block mt-2"
                />
              </th>
              <th>
                Delete {selectedRows.length === 0 ? "" : selectedRows.length}
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {configRows.map((blog) => (
              <tr>
                <th>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                      onChange={() => handleSelectedRow(blog.id)}
                      checked={selectedRows.includes(blog.id)}
                    />
                  </label>
                </th>
                <td
                  className={`${
                    configType === "id" && "bg-base-200"
                  }  cursor-pointer`}
                >
                  <Highlighter
                    searchWords={[search.id]}
                    autoEscape={true}
                    textToHighlight={blog.id}
                    highlightClassName="bg-red-200"
                  />
                </td>
                <td
                  className={`${
                    configType === "title" && "bg-base-200"
                  }  cursor-pointer`}
                >
                  <Highlighter
                    searchWords={[search.title]}
                    autoEscape={true}
                    textToHighlight={blog.title}
                    highlightClassName="bg-red-200"
                  />
                </td>
                <td
                  className={`${
                    configType === "category" && "bg-base-200"
                  }  cursor-pointer`}
                >
                  <Highlighter
                    searchWords={[search.category]}
                    autoEscape={true}
                    textToHighlight={blog.category}
                    highlightClassName="bg-red-200"
                  />
                </td>
                <th>
                  <button
                    className="btn btn-base-300 btn-xs hover:bg-red-600 hover:text-white"
                    onClick={() => handleDeleteBlog(blog.id)}
                  >
                    Delete
                    <MdDelete />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Dashboard;
