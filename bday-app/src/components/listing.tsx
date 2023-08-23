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
					Embark on the wackiest gaming escapade with the{" "}
					<strong>Xbox Series S</strong> – your portal to a dimension where
					chickens race unicorns and marshmallow rainstorms are the norm!
					Prepare your brain for a rollercoaster of <em>graphics</em> so
					jaw-dropping, your eyebrows might just leap off your face.
				</p>
				<p className={styles.description}>
					Ever dreamed of loading times shorter than a hiccup? The{" "}
					<strong>Xbox Series S</strong> is your genie granting that wish! It's
					so compact, you'd think it was crafted by magical gnomes in their
					secret lair. And the controller? It's like shaking hands with a{" "}
					<em>robot panda</em> – pure ergonomic bliss.
				</p>
				<p className={styles.description}>
					Dive into <u>online play</u> and mingle with gamers from realms
					unknown – it's like a virtual costume party with penguins and pirates!
					Don't miss out on this cosmic dance of pixels and joy. Grab your
					popcorn, unicorn slippers, and a sense of wonder – the{" "}
					<strong>Xbox Series S</strong> is your spaceship to the silliest
					galaxies of gaming!
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
