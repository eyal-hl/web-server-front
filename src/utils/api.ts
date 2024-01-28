import { PostProps } from '../components/Post/Post';
import data from './MOCK_DATA.json';

export const getPosts = async (): Promise<PostProps[]> => {
    return data.posts;
};
