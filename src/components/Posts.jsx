import React from 'react';
import axios from 'axios';
const BASE_URL = 'https://www.tabnews.com.br/api/v1';
import Post from './Post';

const fetchPosts = async () => {
    try {
        let posts = await axios.get(`${BASE_URL}/contents?strategy=relevant`);
        return posts.data;
    } catch (error) {
        console.error('Erro ao fazer a solicitação:', error);
    }
}

const allPosts = await fetchPosts();

const Posts = () => {

    return (
        <div className='posts-container'>
            {allPosts.map((post, index) => (
                <Post key={index} name={post.title} comments={post.children_deep_count} created_at={post.created_at} tabcoins={post.tabcoins} user={post.owner_username
                }/>
            ))}
        </div>

    )
}

export default Posts;