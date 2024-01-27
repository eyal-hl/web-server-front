import styles from './Post.module.css';

export interface PostProps {
    text: string;
    user_name: string;
    imagePath: string;
    isLiked: boolean;
}

const Post = (props: PostProps) => {
    // Implement your component logic here

    return <div>{props.text}</div>;
};

export default Post;
