/* eslint-disable no-unused-vars */
import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../rtk/postSlice';

const PostLists = () => {
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deletePost({ id: id }));
    };

    const renderCard = () =>
        posts.map((post) => (
            <div key={post.id} className="bg-white p-5 flex items-center justify-between">
                <div className="overflow-hidden">
                    <h2 className="font-bold text-lg text-indigo-700 capitalize">{post.title}</h2>
                    <p className="font-normal text-gray-600 whitespace-normal">{post.content}</p>
                </div>
                <div className="flex gap-4">
                    <Link to={`edit-post/${post.id}`}>
                        <button className="text-indigo-500">
                            <AiOutlineEdit />
                        </button>
                    </Link>
                    <button className="text-indigo-500" onClick={() => handleDelete(post.id)}>
                        <MdOutlineDelete />
                    </button>
                </div>
            </div>
        ));

    return (
        <div className='bg-blue-950 text-white rounded-lg shadow-lg p-5'>
            <h1 className="text-center text-5xl font-bold text-indigo-500">BLOG POSTS</h1>
            <Link to="/add-post">
                <div className="flex justify-center">
                    <Button>Add Post</Button>
                </div>
            </Link>
            <div className="grid gap-5 md:grid-cols-2">
                {posts.length ? renderCard() : <p className="text-center col-span-2 text-gray-100 font-semibold">No Posts</p>}
            </div>
        </div>
    );
};

export default PostLists;
