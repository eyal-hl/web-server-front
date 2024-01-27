import styles from './Post.module.css';

export interface PostProps {
    text: string;
    user_name: string;
    imagePath: string;
    isLiked: boolean;
    id: number;
}

const Post = (props: PostProps) => {
    return (
        <div className={styles.post}>
            <div className={styles.postHeader}>
                <div className={styles.postHeaderImg}>
                    <img src={props.imagePath} />
                </div>
                <div className={styles.postHeaderText}>{props.user_name}</div>
            </div>
            <div className={styles.postBody}>{props.text}</div>
            <div className={styles.postFooter}>
                <div className={styles.postFooterLike}>
                    <img
                        src={
                            props.isLiked
                                ? '../../../assets/heart.png'
                                : '../../../assets/heartOutline.png'
                        }
                    />
                </div>
                <div className={styles.postFooterComment}>
                    <img src="../../../assets/comment.png" />
                </div>
            </div>
        </div>
    );
};

export default Post;
