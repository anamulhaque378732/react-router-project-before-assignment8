import { useEffect, useState } from "react"
import { deleteBlog, getBlogs } from "../utils";
import BlogCard from "../components/BlogCard";
import ErrorPage from "../components/ErrorPage";



const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs)
    }, [])


    const handleDelete = id => {
        deleteBlog(id);
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs)
    };
    if (blogs.length < 1) {
        return <ErrorPage></ErrorPage>
    };




    return (
        <div className="grid md:my-10   sm-:px-8 md:px-12 lg:px-16 justify-center  md:grid-cols-2 gap-10 sm:grid-cols-1 lg:grid-cols-3">
            {
                blogs.slice(1, 19).map(blog => <BlogCard handleDelete={handleDelete} key={blog.id} blog={blog}></BlogCard>)
            }
        </div>
    );
};

export default Bookmarks;