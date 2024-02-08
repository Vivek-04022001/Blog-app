// SearchInput.jsx
const SearchInput = ({ id, value, onChange, configType }) => {
  return (
    <th className={`${configType === id && "bg-base-200"}  cursor-pointer`}>
      <span className="flex gap-2">
        {id.charAt(0).toUpperCase() + id.slice(1)}
        <FaFilter onClick={() => handleConfigRows(id)} />
      </span>
      <input
        id={id}
        type="text"
        placeholder={`search for ${id}`}
        onChange={onChange}
        value={value}
        className="input input-xs input-bordered w-full max-w-xs block mt-2"
      />
    </th>
  );
};

export default SearchInput;