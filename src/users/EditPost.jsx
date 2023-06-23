/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import TextInput from './TextInput';
import Button from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updatePost } from '../rtk/postSlice';

const EditPost = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const posts = useSelector(store => store.posts);
  const navigate = useNavigate();
  const existingPost = posts.find(post => post.id === params.id);
  const { title, content } = existingPost || { title: '', content: '' };
  const [blogPost, setBlogPost] = useState({
    title,
    content
  });

  const handleEditUser = () => {
    setBlogPost({ title: '', content: '' });
    dispatch(
      updatePost({
        id: params.id,
        title: blogPost.title,
        content: blogPost.content
      })
    );
    navigate('/');
    console.log(blogPost);
  };

  return (
    <div className='mt-10 max-w-xl mx-auto'>
      <TextInput
        label='Title:'
        value={blogPost.title}
        onChange={(e) => setBlogPost({ ...blogPost, title: e.target.value })}
        input={{ type: 'text', placeholder: 'Title here' }}
      />
      <br />
      <TextInput
        label='Content:'
        value={blogPost.content}
        onChange={(e) => setBlogPost({ ...blogPost, content: e.target.value })}
        input={{ type: 'text', placeholder: 'Content here' }}
      />
      <Button onClick={handleEditUser}>Edit Post</Button>
    </div>
  );
};

export default EditPost;
