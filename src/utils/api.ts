import { PostProps } from '../components/Post/Post';
import data from './data.json';

export const getPosts = (): PostProps[] => {
    return data.posts;
};
