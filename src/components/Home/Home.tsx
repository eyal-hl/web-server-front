import styles from './Home.module.css';
import { PostProps } from '../Post/Post';
import { useEffect, useState } from 'react';
import Post from '../Post/Post';
import * as Api from '../../utils/api';

const Home = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);
    useEffect(() => {
        getPosts();
    }, []);
    const getPosts = async () => {
        const data = await Api.getPosts();
        setPosts(data);
    };

    const renderPosts = posts.map((post) => {
        return (
            <Post
                text={post.text}
                user_name={post.user_name}
                imagePath={post.imagePath}
                isLiked={post.isLiked}
                key={post.id}
                id={post.id}
            />
        );
    });

    return <div className={styles.home}>{renderPosts}</div>;
};

export default Home;
