import { FC, useState } from "react";
import uuid from "react-uuid";
import { Main } from "components/Main";
import { Sidebar } from "components/Sidebar";
import { Note } from "types/Note";

import "App.css";

export const App: FC = () => {
	const [noteList, setNoteList] = useState<Note[] | []>([]);
	const [activeNoteId, setActiveNoteId] = useState("");

	const onAddNote = () => {
		const newNote: Note = {
			id: uuid(),
			title: "",
			content: "",
			modDate: Date.now(),
		};

		setNoteList([...noteList, newNote]);
	};

	const onDeleteNote = (id: string) => {
		const newNoteList = noteList.filter((note) => note.id !== id);
		setNoteList(newNoteList);
	};

	const onUpdateNote = (updatedNote: Note) => {
		const updatedNoteList = noteList.map((note) =>
			note.id === updatedNote.id ? updatedNote : note
		);
		setNoteList(updatedNoteList);
	};

	const getActiveNote = (): Note | null => {
		return noteList.find((note) => note.id === activeNoteId) ?? null;
	};

	return (
		<div className="App">
			<Sidebar
				noteList={noteList}
				onAddNote={onAddNote}
				onDeleteNote={onDeleteNote}
				activeNoteId={activeNoteId}
				setActiveNoteId={setActiveNoteId}
			/>
			<Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
		</div>
	);
};
