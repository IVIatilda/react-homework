import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { CartActions } from "@/app/redux/features/cart";

export const Modal = (props: { movieId: string; onCancel: () => void }) => {
  const dispatch = useDispatch();

  const deleteTicket = () => {
    dispatch(CartActions.delete(props.movieId));
    props.onCancel();
  };

  const closeModal = (event: any) => {
    if (event.target.classList.contains(styles.modal)) {
      props.onCancel();
    }
  };

  return (
    <div className={styles.modal} onClick={closeModal}>
      <div className={styles.modalContent}>
        <div className={styles.modalTitle}>Удаление билета</div>
        <p>Вы уверены, что хотите удалить билет?</p>
        <div className={styles.buttons}>
          <button className={styles.buttonOrange} onClick={deleteTicket}>
            Да
          </button>
          <button className={styles.buttonTransparent} onClick={props.onCancel}>
            Нет
          </button>
        </div>
      </div>
    </div>
  );
};
