import { useState, useEffect } from "react";
import styles from "./Notes.module.css";
import Note from "./Note";

const Notes = (props) => {
	const NOTES = JSON.parse(window.localStorage.getItem("notes"));

	const [notes, setNotes] = useState([]);

	useEffect(() => {
		setNotes(() => {
			return NOTES ? NOTES : [];
		});
	}, []);

	const addNote = (note) => {
		const { text, date } = note;
		console.log(text);

		if (!text) {
			return;
		}

		const newNote = {
			key: notes.length + 1,
			index: notes.length,
			text,
			date,
			saved: true,
		};

		const newNotes = [...notes, newNote];
		debugger;

		window.localStorage.setItem("notes", JSON.stringify([...newNotes]));

		setNotes(() => {
			return [...newNotes];
		});
	};

	const deleteNote = (index) => {
		const activeNote = notes[index];
		const updatedNotes = [...notes];
		updatedNotes[index] = { ...activeNote, isDeleted: true };
		debugger;

		window.localStorage.setItem("notes", JSON.stringify([...updatedNotes]));

		setNotes(() => {
			return [...updatedNotes];
		});
	};

	return (
		<main className={styles["notes"]}>
			{notes
				.filter((el) => {
					return !el.isDeleted;
				})
				.filter((el) => {
					return el.text.toLowerCase().includes(props.query.toLowerCase());
				})
				.map((note) => {
					return (
						<Note
							key={note.key}
							index={note.key - 1}
							text={note.text}
							date={note.date}
							saved={note.saved}
							addNoteHandler={addNote}
							deleteNoteHandler={deleteNote}
						/>
					);
				})}
			<Note addNoteHandler={addNote} />
		</main>
	);
};

export default Notes;
