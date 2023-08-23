import styles from "./deal.module.scss";
import xboxPicture from "../assets/xbox.webp";
import backrooms from "../assets/backrooms.png";
const Deal = (): JSX.Element => {
	return (
		<div className={[styles.deal].join(" ")} data-cy="Deal">
			<img src={xboxPicture} className={styles.deal__bgImg} />
			<h2>Up to 10% off XBox Series S</h2>
			<p>Grab yours now, or you are a biscuit.</p>
			<img src={backrooms} className={styles.deal__ad} />
		</div>
	);
};

export default Deal;
