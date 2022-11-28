import { FC, useState } from "react";
import uuid from "react-uuid";
import { Main } from "components/Main";
import { Sidebar } from "components/Sidebar";
import { Note } from "types/Note";

import "App.css";

export const App: FC = () => {
	const [noteList, setNoteList] = useState<Note[] | []>([]);

	const onAddNote = () => {
		const newNote: Note = {
			id: uuid(),
			title: "test-title",
			content: "test-content",
			modDate: Date.now(),
		};

		setNoteList([...noteList, newNote]);
	};

	const onDeleteNote = (id: string) => {
		const newNoteList = noteList.filter((note) => note.id !== id);
		setNoteList(newNoteList);
	};

	return (
		<div className="App">
			<Sidebar
				noteList={noteList}
				onAddNote={onAddNote}
				onDeleteNote={onDeleteNote}
			/>
			<Main />
		</div>
	);
};
