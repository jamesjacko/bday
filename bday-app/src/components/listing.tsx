import listingImg from "../assets/xbox-listing.jpeg";
import styles from "./listing.module.scss";

const Listing = (): JSX.Element => {
	return (
		<div className={[styles.listing].join(" ")} data-cy="Listing">
			<img src={listingImg} alt="" />
			<div className={styles.content}>
				<h2>
					Xbox Series S <span className={styles.price}>&pound;215.00</span>
				</h2>
				<p>
					Experience next-gen speed and performance with our largest digital
					library yet. Enjoy more dynamic worlds, faster load times, and add
					Xbox Game Pass Ultimate (membership sold separately) to play new games
					on day one. Plus, enjoy hundreds of high-quality games like Minecraft,
					Forza Horizon 5 and Halo Infinite with friends on console, PC and
					cloud.
				</p>
				<div className={styles.cta}>
					<p className={styles.price}>&pound;215.00</p>
					<button className={styles.buyNow}>Buy Now</button>
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
						<td>30 days no quibble</td>
					</tr>
				</table>
			</div>
		</div>
	);
};

export default Listing;
