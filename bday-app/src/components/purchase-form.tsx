import { useEffect, useState } from "react";
import styles from "./purchase-form.module.scss";
import TextInput from "./text-input";
import completionAnimation from "../assets/complete.json";
import loadingAnimation from "../assets/loading.json";
import Lottie from "react-lottie";
type PurchaseFormProps = {
	className?: string;
	handleClose?: () => void;
};
const PurchaseForm = ({ className = "purchase-form", handleClose }: PurchaseFormProps): JSX.Element => {
	const [showCompletion, setShowCompletion] = useState(false);
	const [animationData, setAnimationData] = useState<object>(loadingAnimation);
	const [values, setValues] = useState({
		discountCode: "",
		name: "",
		address: "",
	});

	const [price, setPrice] = useState("268.75");

	useEffect(() => {
		if (values.discountCode === "FINN_IS_GREAT") {
			setPrice("242.00");
		} else {
			setPrice("268.88");
		}
	}, [values.discountCode]);


	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	}

	const handleClick = () => {
		setShowCompletion(true);
	}
	const handleCompletion = () => {
		if (animationData === loadingAnimation) {
			setAnimationData(completionAnimation);
			return;
		}
		setAnimationData(loadingAnimation);
		setShowCompletion(false);
		handleClose && handleClose();
	}
	return (
		<div className={[styles.purchaseForm, className].join(" ")}>
			{showCompletion ? (
				<Lottie
					options={{
						animationData: animationData,
						loop: false,
					}}
					eventListeners={[{ eventName: "complete", callback: handleCompletion }]}
				/>
			) : (
				<>
					<TextInput
						label="Name"
						value={values.name}
						name="name"
						onChange={handleChange}
					/>
					<TextInput
						label="Address"
						value={values.address}
						name="address"
						onChange={handleChange}
					/>
					<TextInput
						label="Discount code"
						value={values.discountCode}
						name="discountCode"
						onChange={handleChange}
						highlighted
					/>
					<dl className={styles.checkoutDetails}>
						<dt className={styles.price}>Price:</dt>
						<dd className={styles.price}>&pound;{price}</dd>
						<dt>Shipping (UK):</dt>
						<dd>&pound;0.00 (Birthday discount)</dd>
						<dt>Delivery Date:</dt>
						<dd>In 5 minutes</dd>
					</dl>
					<button className={styles.buyNow} onClick={handleClick}>
						Buy Now
					</button>
				</>
			)}
		</div>
	);
};

export default PurchaseForm;
