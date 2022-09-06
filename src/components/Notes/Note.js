import { useState } from "react";
import styles from "./Note.module.css";

const Note = (props) => {
	const text = props?.text;
	const date = props?.date;
	const saved = props?.saved;

	const CHARACTER_LIMIT = 200;

	const [characterCount, setCharacterCount] = useState(CHARACTER_LIMIT);
	const [noteText, setNoteText] = useState(text);
	const [isSaved, setIsSaved] = useState(saved);

	const handleCharacterCount = (event) => {
		const inputValue = event.target.value;
		const charactersRemaining = CHARACTER_LIMIT - inputValue.length;

		setCharacterCount(() => charactersRemaining);
		setNoteText(() => inputValue);
	};

	const handleDeleteEvent = () => {};
	const handleSaveEvent = () => {};

	const trashIcon = <i className={`fa-solid fa-trash`}></i>;

	return (
		<div
			className={`${styles["note"]} ${
				!isSaved ? styles["active"] : styles["saved"]
			}`}
		>
			<input
				className={styles["note-input"]}
				type="text"
				placeholder="Type to add a note..."
				onChange={handleCharacterCount}
				value={noteText ?? ""}
			/>
			<footer className={styles["note-footer"]}>
				<span className={styles["note-character-count"]}>
					{date ? date : characterCount}
				</span>
				{isSaved ? (
					<button
						className={`${styles["note-action-btn"]} ${styles.action}`}
						onClick={handleDeleteEvent}
					>
						{trashIcon}
					</button>
				) : (
					<button
						className={styles["note-action-btn"]}
						onClick={handleSaveEvent}
					>
						Save
					</button>
				)}
			</footer>
		</div>
	);
};

export default Note;
