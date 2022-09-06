import styles from "./Searchbar.module.css";

const Searchbar = (props) => {
	const handleSearch = (e) => {
		const searchValue = e.target.value;
		props.setSearchQuery(() => searchValue);
	};

	return (
		<nav className={styles["searchbar"]}>
			<i
				className={`fa-solid fa-magnifying-glass ${styles["searchbar-icon"]}`}
			></i>
			<input
				className={styles["searchbar-input"]}
				type="text"
				placeholder="type to search..."
				onChange={handleSearch}
			></input>
		</nav>
	);
};

export default Searchbar;
