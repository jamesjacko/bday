import styles from "./deal.module.scss";
import xboxPicture from "../assets/xbox.webp";
const Deal = (): JSX.Element => {
	return (
		<div className={[styles.deal].join(" ")} data-cy="Deal">
			<img src={xboxPicture} />
			<h2>Up to 20% off XBox Series S</h2>
			<p>Grab yours now, or you are a biscuit.</p>
		</div>
	);
};

export default Deal;
