import styles from "./Searchbar.module.css";

const Searchbar = () => {
	return (
		<nav className={styles["searchbar"]}>
			<i
				className={`fa-solid fa-magnifying-glass ${styles["searchbar-icon"]}`}
			></i>
			<input
				className={styles["searchbar-input"]}
				type="text"
				placeholder="type to search..."
			></input>
		</nav>
	);
};

export default Searchbar;
