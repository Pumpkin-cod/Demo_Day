/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import TextInput from './TextInput';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPost } from '../rtk/postSlice';
import { v4 as uuidv4 } from 'uuid';

const AddPost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [blogPost, setBlogPost] = useState({
        title: '',
        content: ''
    });

    const handleAddUser = () => {
        setBlogPost({ title: '', content: '' });
        dispatch(
            addPost({
                id: uuidv4(),
                title: blogPost.title,
                content: blogPost.content
            })
        );
        navigate('/');
    };

    return (
        <div className="mt-10 max-w-xl mx-auto bg-blue-950 rounded-lg shadow-lg p-5">
            <TextInput 
                label="Title:"
                value={blogPost.title}
                onChange={(e) => setBlogPost({ ...blogPost, title: e.target.value })}
                input={{ type: 'text', placeholder: 'Title here' }} 
            
            />
            <br />
            <TextInput
                label="Content:"
                value={blogPost.content}
                onChange={(e) => setBlogPost({ ...blogPost, content: e.target.value })}
                input={{ type: 'text', placeholder: 'Content here' }} 
            />
            <Button onClick={handleAddUser}>Save Post</Button>
        </div>
    );
};

export default AddPost;
