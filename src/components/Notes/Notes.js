import { useState, useEffect } from "react";
import styles from "./Notes.module.css";
import Note from "./Note";

const Notes = (props) => {
	const NOTES = [
		{
			key: 1,
			text: "This is my first note.",
			date: "06/09/2022",
			saved: true,
		},
		{
			key: 2,
			text: "Pick up the groceries",
			date: "06/09/2022",
			saved: true,
		},
	];
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		setNotes(() => {
			return NOTES;
		});
	}, []);

	const addNote = (note) => {
		const { text, date } = note;
		const newNote = {
			key: notes.length + 1,
			index: notes.length,
			text,
			date,
			saved: true,
		};

		setNotes(() => [...notes, newNote]);
	};

	const deleteNote = (index) => {
		const activeNote = notes[index];
		const updatedNotes = [...notes];
		updatedNotes[index] = { ...activeNote, isDeleted: true };

		setNotes(() => [...updatedNotes]);
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
