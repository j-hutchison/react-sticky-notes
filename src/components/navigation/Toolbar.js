import styles from "./Toolbar.module.css";

const Toolbar = (props) => {
	return (
		<header className={styles.toolbar}>
			<div className={styles["toolbar-banner"]}>
				<h1 className={styles["toolbar-heading"]}>Notes</h1>
				<button className={styles["toolbar-btn"]}>Toggle Mode</button>
			</div>
			{props.children}
		</header>
	);
};

export default Toolbar;
