import styles from './Home.module.css';
import { propPost } from '../Post/Post';
import { useEffect, useState } from 'react';
import * as Api from '../../utils/api';

const Home = () => {
    const [posts, setPosts] = useState<propPost[]>([]);
    useEffect(() => {
        getPosts();
    }, []);
    const getPosts = async () => {
        const data = await Api.getPosts();
        setPosts(data);
    };
    return <div className={styles.home}>Home</div>;
};

export default Home;
