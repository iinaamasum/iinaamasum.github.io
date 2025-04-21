import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TextFormatter from '../components/TextFormatter';
import blogsData from '../database/blogs.json';

const BlogDetail = () => {
    const { id } = useParams();
    const blog = blogsData.blogs[id];

    if (!blog) {
        return <p>Blog not found.</p>;
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 text-blue-800">
                <TextFormatter text={blog.title} />
            </h1>
            <p className="italic font-normal">{blog.authors}</p>
            <p className="text-green-600">{blog.status}</p>
            <div className="text-justify mt-4 space-y-4">
                {blog.details.map((paragraph, index) => (
                    <p key={index}>
                        <TextFormatter text={paragraph} />
                    </p>
                ))}
            </div>
            <Link
                to="/blogs"
                className="text-blue-500 hover:underline mt-4 block"
            >
                Back to Blogs
            </Link>
        </div>
    );
};

export default BlogDetail;
