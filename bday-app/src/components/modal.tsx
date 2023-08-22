import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./modal.module.scss";

type ModalProps = {
	open: boolean;
	onClose?: () => void;
	children?: React.ReactNode;
};

const Modal = ({ open, onClose, children }: ModalProps): JSX.Element => {
	return (
		<div
			className={[styles.modalBackdrop, open ? styles.open : ""].join(" ")}
			data-cy="Modal"
		>
			<div className={styles.modal}>
				<div className={styles.modal__header}>
					<p className={styles.modal__header__title}>Checkout</p>
					<FontAwesomeIcon
						icon={faXmark}
						className={styles.modal__header__close}
						onClick={onClose}
					/>
				</div>
				<div className={styles.modal__body}>
					<div className={styles.modal__body__content}>{children}</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
