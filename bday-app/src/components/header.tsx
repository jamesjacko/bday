import Logo from "./logo";
import styles from "./header.module.scss";
import SearchBox from "./search-box";
import Deal from "./deal";

type HeaderProps = {
	className?: string;
};
const Header = ({ className = "Header" }: HeaderProps): JSX.Element => {
	return (
		<header className={[className, styles.header].join(" ")} data-cy="Header">
			<div className={styles.container}>
				<Logo />
				<SearchBox />
			</div>
			<Deal />
		</header>
	);
};

export default Header;
