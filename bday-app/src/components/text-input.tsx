import styles from "./text-input.module.scss";

type TextInputProps = {
	value: string;
	name: string;
	label: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	highlighted?: boolean;
};
const TextInput = ({
	value,
	name,
	label,
	onChange,
	highlighted = false,
}: TextInputProps): JSX.Element => {
	return (
		<label
			htmlFor={name}
			className={[styles.textInput, highlighted ? styles.highlighted : ""].join(
				" "
			)}
		>
			{label}
			<input type="text" name={name} value={value} onChange={onChange} />
		</label>
	);
};

export default TextInput;
