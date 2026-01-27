import styles from './style.module.css'

interface ICommentProps{
  reviewerName: string,
  comment: string
}

const Comment = (Props: ICommentProps) => {
  const {
    reviewerName,
    comment
  } = Props
  return (
    <div className={styles.commentWrapper}>
      <p className={styles.name}>Имя: {reviewerName}</p>
      <p className={styles.comment}>{comment}</p>
    </div>
  )
}

export default Comment
