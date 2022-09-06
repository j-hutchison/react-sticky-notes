import styles from "./Notes.module.css";
import Note from "./Note";

const Notes = () => {
	const NOTES = [
		{
			text: "This is my first note.",
			date: "06/09/2022",
			saved: true,
		},
		{
			text: "Pick up the groceries",
			date: "06/09/2022",
			saved: true,
		},
	];

	return (
		<main className={styles["notes"]}>
			{NOTES.map((note) => {
				return <Note text={note.text} date={note.date} saved={note.saved} />;
			})}
			<Note />
		</main>
	);
};

export default Notes;
