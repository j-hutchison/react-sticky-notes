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

	const handleDeleteEvent = (e) => {
		console.log(`Note.js - key: ${props?.index}`);
		const noteIndex = props?.index;
		props.deleteNoteHandler(noteIndex);
	};

	const handleSaveEvent = (e) => {
		e.preventDefault();
		props.addNoteHandler({ text: noteText, date: "06/09/2022" });

		setCharacterCount(() => CHARACTER_LIMIT);
		setNoteText(() => "");
		setIsSaved(() => false);
	};

	const trashIcon = <i className={`fa-solid fa-trash`}></i>;

	return (
		<form
			onSubmit={handleSaveEvent}
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
					{date ? date : `${characterCount} Remaining`}
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
		</form>
	);
};

export default Note;
