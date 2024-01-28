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
                {...post}
                key={post.id}
                onLikeClick={() => handleLikeClick(post.id)}
            />
        );
    });

    const handleLikeClick = (id: number) => {
        const newPosts = posts.map((post) => {
            if (post.id === id) {
                return {
                    ...post,
                    isLiked: !post.isLiked,
                };
            }
            return post;
        });
        setPosts(newPosts);
    }

    return <div className={styles.home}><div className={styles.postsWrapper}>{renderPosts}</div></div>;
};

export default Home;
