import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const CreateNewBlogButton = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/new");
  };
  return (
    <IoMdAdd
      className="cursor-pointer absolute w-20 h-20 -top-8 -right-8 z-50 rounded-full outline bg-white hover:bg-white/60 shadow-xl transition-all duration-300 ease-in-out"
      onClick={handleNavigate}
    />
  );
};

export default CreateNewBlogButton;
