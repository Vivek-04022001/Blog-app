import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { selectAllBlogs} from '../store/blogs/blogsSlice'
const CurrentBlog = () => {
  const {blogId} = useParams()
  const currentBlog = useSelector(selectAllBlogs).find(blog => blog.id === blogId)
  console.log(currentBlog)
  return (
    <section className='Container-sm '>
      <div>
      <h1 className='text-center text-4xl mb-4 underline '>{currentBlog.title}</h1>
      <div className="badge badge-neutral mb-2">Category: {currentBlog.category}</div>
      <img src={currentBlog.img} alt="blog-image" className='aspect-square object-cover' />
      <p className='mt-10'>
        {currentBlog.content}
      </p>
      </div>
    </section>
  )
}

export default CurrentBlog