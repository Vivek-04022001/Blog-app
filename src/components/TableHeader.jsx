import SearchInput from "./SearchInput";
// TableHeader.jsx
const TableHeader = ({ handleSelectAllRows, selectedRows, blogs }) => {
  return (
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
        <SearchInput id="id" {...props} />
        <SearchInput id="title" {...props} />
        <SearchInput id="category" {...props} />
        <th>
          Delete {selectedRows.length === 0 ? "" : selectedRows.length}
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;