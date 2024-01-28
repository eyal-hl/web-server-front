import styles from './Post.module.css';
import { CiHeart } from 'react-icons/ci';
import { TfiComment } from "react-icons/tfi";
export interface PostProps {
    text: string;
    userName: string;
    imagePath: string;
    isLiked: boolean;
    id: number;
    commentsAmount: number;
    onLikeClick: () => void;
}

const Post = (props: PostProps) => {
    return (
        <div className={styles.post}>
            <div className={styles.imageWrapper}>
                <img src={props.imagePath} className={styles.image} />
            </div>
            <div className={styles.usernameWrapper}>
                <div className={styles.username}>{props.userName}</div>
            </div>
            <div className={styles.postTextWrapper}>
                <div className={styles.postText}>{props.text}</div>
            </div>
            <div className={styles.footer}>
                <div className={styles.likeWrapper}>
                    <div className={styles.like} onClick={props.onLikeClick}>
                        {props.isLiked ? <img src='../../assets/CricketThumbsUp.png'/> : <CiHeart />}
                    </div>
                </div>
                <div className={styles.commentAmountWrapper}>
                    <div className={styles.commentAmount}>
                        {props.commentsAmount} <TfiComment />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
