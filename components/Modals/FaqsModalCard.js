import styles from "@/styles/layout.module.css";
import { FaqsForm } from "../Forms";

const FaqsModalCard = () => {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <div className={styles.modal_back_drop} />
      <div className={styles.modal_container} role="dialog">
        <div className={styles.modal_container_header}>
          <h4>Create New FAQ</h4>
        </div>
        <div className={styles.modal_container_body}>
          <div className="card-body">
            <FaqsForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqsModalCard;
