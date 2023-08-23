import listingImg from "../assets/xbox-listing.jpeg";
import useModal from "../hooks/use-modal";
import styles from "./listing.module.scss";
import Modal from "./modal";
import PurchaseForm from "./purchase-form";

const Listing = (): JSX.Element => {
	const modal = useModal();

	const openModal = () => {
		modal.show();
	}
	return (
		<div className={[styles.listing].join(" ")} data-cy="Listing">
			<img src={listingImg} alt="" />
			<div className={styles.content}>
				<h2>
					Xbox Series S{" "}
					<span className={styles.price}>
						<span>&pound;268.88</span> &pound;242.00
					</span>
				</h2>
				<p className={styles.description}>
					Experience next-gen speed and performance with our largest digital
					library yet. Enjoy more dynamic worlds, faster load times, and add
					Xbox Game Pass Ultimate (membership sold separately) to play new games
					on day one. Plus, enjoy hundreds of high-quality games like Minecraft,
					Forza Horizon 5 and Halo Infinite with friends on console, PC and
					cloud.
				</p>
				<div className={styles.cta}>
					<p className={styles.price}>
						<span>&pound;268.88</span> &pound;242.00
					</p>
					<button className={styles.buyNow} onClick={openModal}>
						Buy Now
					</button>
				</div>
				<table className={styles.table}>
					<tr>
						<td>Shipping (UK):</td>
						<td>&pound;0.00 (calculated at checkout)</td>
					</tr>
					<tr>
						<td>Delivery:</td>
						<td>Estimated 2 minutes from time of purchase</td>
					</tr>
					<tr>
						<td>Returns:</td>
						<td>I mean... you can try?!</td>
					</tr>
				</table>
			</div>
			<Modal open={modal.isVisible} onClose={modal.hide}>
				<PurchaseForm handleClose={modal.hide} />
			</Modal>
		</div>
	);
};

export default Listing;
