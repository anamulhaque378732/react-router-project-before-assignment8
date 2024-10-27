import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { MdBookmarkAdd } from "react-icons/md";
import { saveBlog } from "../utils";


const Blog = () => {

    const [tabIndex, setTabIndex] = useState(0);

    const blog = useLoaderData();

    const { title, comments_count, published_at, reading_time_minutes, public_reactions_count, } = blog;
    const handleBookmark = blog => {
        saveBlog(blog)

    }



    return (
        <div className="max-w-3xl  px-4 py-10  mx-auto space-y-12">
            <article className="space-y-8 p-4 dark:bg-gray-100 dark:text-gray-900">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl"> {title}</h1>
                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">

                        <div className="flex md:gap-96 justify-between text-center   md:space-x-2">

                            <p className="mt-3 text-sm md:mt-0"> {reading_time_minutes} min read  {new Date(published_at).toLocaleDateString()} </p>
                            <p>{comments_count} comments  {public_reactions_count} View</p>
                        </div>

                    </div>
                </div>
                <div className="dark:text-gray-800">
                    <div className="flex  items-center justify-start -mx-4   overflow-y-hidden    flex-nowrap dark:bg-gray-100 dark:text-gray-800">

                        <Link onClick={() => setTabIndex(0)} className={`flex  flex-shrink-0 px-5 py-3 space-x-2    ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <span> Content </span>
                        </Link>

                        <Link to={`author`} onClick={() => setTabIndex(1)} className={`flex  flex-shrink-0 px-5 py-3 space-x-2    ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            <span>  Author</span>
                        </Link>
                        {/* book mark button */}
                        <div onClick={() => handleBookmark(blog)} className="bg-primary  ml-5 hover:bg-opacity-5 bg-opacity-20 p-2 rounded-full hover:scale-110 overflow-hidden cursor-pointer">
                            <MdBookmarkAdd size={20} className="text-secondary"></MdBookmarkAdd>
                        </div>
                    </div>
                </div>
                <Outlet></Outlet>
            </article>





            <div>


            </div>
        </div>
    );
};

export default Blog;