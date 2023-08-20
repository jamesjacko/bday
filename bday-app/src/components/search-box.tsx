import { useState } from "react";
import styles from "./search.module.scss";
const SearchBox = (): JSX.Element => {

	const [searchValue, setSearchValue] = useState("");

	const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const handleSearch = () => {
		alert(searchValue);
	}
	return (
		<>
			<input value={searchValue} onChange={handleSearchValue} type="search" className={styles.search} placeholder="Search" />
			<button onClick={handleSearch} className={styles.button}>Search</button>
		</>
	);
};

export default SearchBox;
