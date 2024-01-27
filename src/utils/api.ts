import { PostProps } from '../components/Post/Post';
import data from './data.json';

export const getPosts = async (): Promise<PostProps[]> => {
    return data.posts;
};
