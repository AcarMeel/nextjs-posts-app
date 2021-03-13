import styles from './PostForm.module.scss';

const PostForm = () => {
  return (
    <>
      <form action="">
        <textarea className={styles.formContent}></textarea>
        <button className={styles.formButton}>Add New Post</button>
      </form>
    </>
  );
};

export default PostForm;
