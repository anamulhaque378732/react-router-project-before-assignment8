import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import placeholderImage from '../assets/404.jpg';
import { MdDeleteForever } from "react-icons/md";
 


const BlogCard = ({ blog, deletable,handleDelete }) => {

    const { id, cover_image, title, description, published_at } = blog;
  


    return (
        <div className="max-w-sm rounded-md mx-auto group hover:no-underline focus:no-underline   
            transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30">
            <div className="flex relative">
                <Link to={`/blog/${id}`}
                    className="">
                    <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeholderImage} />
                    <div className="p-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                        <span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleTimeString()}</span>
                        <p>{description}</p>
                    </div>
                </Link>
                <div>
                    {
                        deletable || <div onClick={() => handleDelete(id)} className=" absolute bg-primary p-3 rounded-full hover:scale-105 -top-5 -right-5"> <MdDeleteForever size={20} className="text-secondary group-hover:text-primary"></MdDeleteForever> </div>
                    }
                </div>
            </div>
        </div>
    );
};


BlogCard.propTypes = {
    blog: PropTypes.object.isRequired,
    deletable: PropTypes.bool,
    handleDelete:PropTypes.func
}
export default BlogCard;