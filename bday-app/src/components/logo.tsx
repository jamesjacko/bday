import style from "./logo.module.scss";
const Logo = (): JSX.Element => {
	return (
		<div className={style.logo}>
			<span className={style.red}>b</span>
			<span className={style.blue}>d</span>
			<span className={style.yellow}>a</span>
			<span className={style.green}>y</span>
		</div>
	);
};

export default Logo;
