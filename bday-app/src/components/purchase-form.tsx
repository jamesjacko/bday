import { useEffect, useState } from "react";
import styles from "./purchase-form.module.scss";
import TextInput from "./text-input";
type PurchaseFormProps = {
	className?: string;
	handleClick?: () => void;
};
const PurchaseForm = ({ className = "purchase-form", handleClick }: PurchaseFormProps): JSX.Element => {
	const [values, setValues] = useState({
		discountCode: "",
		name: "",
		address: "",
	});

	const [price, setPrice] = useState("268.75");

	useEffect(() => {
		if (values.discountCode === "FINN_IS_GREAT") {
			setPrice("215.00");
		} else {
			setPrice("268.75");
		}
	}, [values.discountCode]);


	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	}
	return (
		<div className={[styles.purchaseForm, className].join(" ")}>
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
		</div>
	);
};

export default PurchaseForm;
