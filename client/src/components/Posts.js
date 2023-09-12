import BlogCard from './BlogCard';
import useFetch from "./useFetch";
import { useDispatch } from 'react-redux';
import { setData } from '../redux/features/blogSlice';


// Create a Posts.js for show the cards in our main page
export default function Posts() {
  // Using useFetch to fetch data from url and use it in
  // out cards
  const { data, isDataReceive, error } = useFetch("https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0");

  // Save posts data in our store
  const dispatch = useDispatch();
  dispatch(setData(data));

  // Use map to render each data that is exist in our array 
  // and pass those data to our component for render it
  const blogPosts = isDataReceive ? 
    data.blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />) : 
    <div>در حال بارگذازی ....</div>

  return (
    <div 
      className="row"
      style={{ 
        width: "100%", 
        padding: "20px 20px",
        margin: "0",
      }}
    >
      {/* ------------------------------------------
        If there is an error it will not render
        a blogPosts
      ------------------------------------------ */}
      {  error ? error : blogPosts }
    </div>
  );
}