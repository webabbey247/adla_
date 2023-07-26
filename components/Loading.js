import styles from "@/styles/loading.module.css";
const Loading = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.lds_ripple}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
