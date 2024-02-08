import Highlighter from "react-highlight-words";

const BlogRow = ({ blog, handleSelectedRow, selectedRows, configType, search }) => {
  return (
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
      <td className={`${configType === "id" && "bg-base-200"}  cursor-pointer`}>
        <Highlighter
          searchWords={[search.id]}
          autoEscape={true}
          textToHighlight={blog.id}
          highlightClassName="bg-red-200"
        />
      </td>
      <td className={`${configType === "title" && "bg-base-200"}  cursor-pointer`}>
        <Highlighter
          searchWords={[search.title]}
          autoEscape={true}
          textToHighlight={blog.title}
          highlightClassName="bg-red-200"
        />
      </td>
      <td className={`${configType === "category" && "bg-base-200"}  cursor-pointer`}>
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
  );
};

export default BlogRow;