import React from 'react';
import { Link } from 'react-router-dom';
import TextFormatter from '../components/TextFormatter';
import blogsData from '../database/blogs.json';

const Blogs = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold border-b border-gray-200 mb-4">
                Blogs
            </h1>
            <div className="space-y-8">
                {blogsData.blogs.map((blog, idx) => (
                    <div key={idx} className="border-l-4 border-gray-300 pl-4">
                        <h3 className="font-semibold text-lg text-blue-800">
                            <TextFormatter text={blog.title} />
                        </h3>
                        <p className="italic font-normal">{blog.authors}</p>
                        <p className="text-green-600">{blog.status}</p>
                        <p className="text-justify">{blog.summary}</p>
                        <Link
                            to={`/blogs/${idx}`}
                            className="text-blue-500 hover:underline"
                        >
                            Read More
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
