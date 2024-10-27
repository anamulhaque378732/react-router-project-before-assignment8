import toast from "react-hot-toast";
 


export const getBlogs = () => {
    let blogs = [];
    let storedBlogs = localStorage.getItem('blogs')

    if (storedBlogs) {
        blogs = JSON.parse(storedBlogs)
    }
    return blogs

};

// save data
export const saveBlog = blog => {
    let blogs = getBlogs();
    const isExist = blogs.find(b => b.id === blog.id);
    if (isExist) {
        return toast.error('Already bookmarked')
    }

    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    toast.success('Blog bookmarked successfully');


};


// delete data
export const deleteBlog = id => {
    let blogs = getBlogs();
    const remaining = blogs.filter(b => b.id !== id);
    localStorage.setItem('blogs', JSON.stringify(remaining));
    toast.success('Blog removed from bookmark')


}