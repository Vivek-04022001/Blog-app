import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: 'All',
  blogsArray: [
    {
      id: nanoid(),
      title: "First Blog Post",
      category: "Web Development",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia quae nulla consectetur sit tempora, ratione earum rem, atque itaque officiis molestias ullam laboriosam amet libero accusamus facere expedita dignissimos, velit magnam. Tempore nostrum voluptates, perferendis nam rem at consectetur explicabo dolore sunt, laudantium asperiores eveniet. Qui veritatis modi quasi ipsum illum, beatae rem, fugiat reprehenderit ipsa voluptatum maxime hic doloribus totam, suscipit soluta illo temporibus officia distinctio optio deleniti quod? A cumque mollitia suscipit illo et autem doloribus magni molestiae, aliquam ab. Doloremque optio voluptatem similique perferendis minus animi. Veritatis nulla quos commodi dolore ex placeat, veniam accusantium est rem pariatur labore fuga culpa in laborum alias, aliquam harum consequuntur optio delectus mollitia! Ut non impedit quae harum, minus itaque natus voluptates odit, dignissimos tempore deleniti soluta accusamus molestias veniam magnam voluptas. Recusandae amet ullam est porro, ab vel quibusdam neque totam ea excepturi distinctio quam inventore a! A, hic.",
      img: "https://source.unsplash.com/random?sig=1",
    },
    {
      id: nanoid(),
      title: "Second Blog Post",
      category: "React",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia quae nulla consectetur sit tempora, ratione earum rem, atque itaque officiis molestias ullam laboriosam amet libero accusamus facere expedita dignissimos, velit magnam. Tempore nostrum voluptates, perferendis nam rem at consectetur explicabo dolore sunt, laudantium asperiores eveniet. Qui veritatis modi quasi ipsum illum, beatae rem, fugiat reprehenderit ipsa voluptatum maxime hic doloribus totam, suscipit soluta illo temporibus officia distinctio optio deleniti quod? A cumque mollitia suscipit illo et autem doloribus magni molestiae, aliquam ab. Doloremque optio voluptatem similique perferendis minus animi. Veritatis nulla quos commodi dolore ex placeat, veniam accusantium est rem pariatur labore fuga culpa in laborum alias, aliquam harum consequuntur optio delectus mollitia! Ut non impedit quae harum, minus itaque natus voluptates odit, dignissimos tempore deleniti soluta accusamus molestias veniam magnam voluptas. Recusandae amet ullam est porro, ab vel quibusdam neque totam ea excepturi distinctio quam inventore a! A, hic.",
      img: "https://source.unsplash.com/random?sig=2",
    },
    {
      id: nanoid(),
      title: "Third Blog Post",
      category: "Node",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia quae nulla consectetur sit tempora, ratione earum rem, atque itaque officiis molestias ullam laboriosam amet libero accusamus facere expedita dignissimos, velit magnam. Tempore nostrum voluptates, perferendis nam rem at consectetur explicabo dolore sunt, laudantium asperiores eveniet. Qui veritatis modi quasi ipsum illum, beatae rem, fugiat reprehenderit ipsa voluptatum maxime hic doloribus totam, suscipit soluta illo temporibus officia distinctio optio deleniti quod? A cumque mollitia suscipit illo et autem doloribus magni molestiae, aliquam ab. Doloremque optio voluptatem similique perferendis minus animi. Veritatis nulla quos commodi dolore ex placeat, veniam accusantium est rem pariatur labore fuga culpa in laborum alias, aliquam harum consequuntur optio delectus mollitia! Ut non impedit quae harum, minus itaque natus voluptates odit, dignissimos tempore deleniti soluta accusamus molestias veniam magnam voluptas. Recusandae amet ullam est porro, ab vel quibusdam neque totam ea excepturi distinctio quam inventore a! A, hic.",
      img: "https://source.unsplash.com/random?sig=3",
    },
    {
      id: nanoid(),
      title: "Fourth Blog Post",
      category: "Python",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia quae nulla consectetur sit tempora, ratione earum rem, atque itaque officiis molestias ullam laboriosam amet libero accusamus facere expedita dignissimos, velit magnam. Tempore nostrum voluptates, perferendis nam rem at consectetur explicabo dolore sunt, laudantium asperiores eveniet. Qui veritatis modi quasi ipsum illum, beatae rem, fugiat reprehenderit ipsa voluptatum maxime hic doloribus totam, suscipit soluta illo temporibus officia distinctio optio deleniti quod? A cumque mollitia suscipit illo et autem doloribus magni molestiae, aliquam ab. Doloremque optio voluptatem similique perferendis minus animi. Veritatis nulla quos commodi dolore ex placeat, veniam accusantium est rem pariatur labore fuga culpa in laborum alias, aliquam harum consequuntur optio delectus mollitia! Ut non impedit quae harum, minus itaque natus voluptates odit, dignissimos tempore deleniti soluta accusamus molestias veniam magnam voluptas. Recusandae amet ullam est porro, ab vel quibusdam neque totam ea excepturi distinctio quam inventore a! A, hic.",
      img: "https://source.unsplash.com/random?sig=4",
    },
    {
      id: nanoid(),
      title: "Fifth Blog Post",
      category: "JavaScript",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia quae nulla consectetur sit tempora, ratione earum rem, atque itaque officiis molestias ullam laboriosam amet libero accusamus facere expedita dignissimos, velit magnam. Tempore nostrum voluptates, perferendis nam rem at consectetur explicabo dolore sunt, laudantium asperiores eveniet. Qui veritatis modi quasi ipsum illum, beatae rem, fugiat reprehenderit ipsa voluptatum maxime hic doloribus totam, suscipit soluta illo temporibus officia distinctio optio deleniti quod? A cumque mollitia suscipit illo et autem doloribus magni molestiae, aliquam ab. Doloremque optio voluptatem similique perferendis minus animi. Veritatis nulla quos commodi dolore ex placeat, veniam accusantium est rem pariatur labore fuga culpa in laborum alias, aliquam harum consequuntur optio delectus mollitia! Ut non impedit quae harum, minus itaque natus voluptates odit, dignissimos tempore deleniti soluta accusamus molestias veniam magnam voluptas. Recusandae amet ullam est porro, ab vel quibusdam neque totam ea excepturi distinctio quam inventore a! A, hic.",
      img: "https://source.unsplash.com/random?sig=5",
    },
    {
      id: nanoid(),
      title: "Sixth Blog Post",
      category: "Web Development",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit...",
      img: "https://source.unsplash.com/random?sig=6",
    },
    {
      id: nanoid(),
      title: "Seventh Blog Post",
      category: "React",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit...",
      img: "https://source.unsplash.com/random?sig=7",
    },
    {
      id: nanoid(),
      title: "Eighth Blog Post",
      category: "Node",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit...",
      img: "https://source.unsplash.com/random?sig=8",
    },
    {
      id: nanoid(),
      title: "Ninth Blog Post",
      category: "Python",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit...",
      img: "https://source.unsplash.com/random?sig=9",
    },
    {
      id: nanoid(),
      title: "Tenth Blog Post",
      category: "JavaScript",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit...",
      img: "https://source.unsplash.com/random?sig=10",
    },
  ],
  CategoriesList: ["Web Development", "React", "Node", "Python", "JavaScript"],
}

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    blogAdded: {
      reducer(state, action) {
        state.blogsArray.push(action.payload);
      },
      prepare(title, category, content, img) {
        return {
          payload: {
            id: nanoid(),
            title,
            category,
            content,
            img
          },
        };
      },
    },
    setActiveCategory(state, action) {    
      state.activeCategory = action.payload;
    },
    deleteBlog(state, action) {   
      state.blogsArray = state.blogsArray.filter(blog => blog.id !== action.payload);
    }
  },
});

export const selectAllBlogs = (state) => state.blogs.blogsArray;
export const selectActiveCategory = (state) => state.blogs.activeCategory;
export const selectCategoriesList = (state) => state.blogs.CategoriesList;


export const { blogAdded, setActiveCategory, deleteBlog } = blogsSlice.actions;

export default blogsSlice.reducer;
