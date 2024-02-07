import React from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { selectActiveCategory } from '../store/blogs/blogsSlice';
import { setActiveCategory } from '../store/blogs/blogsSlice';

const CategoriesFooter = () => {
  const categories = ['All', 'Web Development', 'React', 'Node', 'Python', 'JavaScript'];
  const activeCategory = useSelector(selectActiveCategory);
  
  const dispatch = useDispatch();
  const handleActiveCategory = (category) => {  
    dispatch(setActiveCategory(category));
  }

  return (
    <div className="Container-sm sticky bottom-10 w-full bg-base-300/70 backdrop-blur-sm p-2 flex justify-around rounded-full">
      {categories.map(category => (
        <button className={`btn rounded-md btn-ghost
        ${activeCategory === category ? 'btn-active' : ''}
        text-yellow-100`} 
        key={category}
        onClick={() => handleActiveCategory(category)}
        >{category}</button>
      ))}
    </div>
  );
};

export default CategoriesFooter;