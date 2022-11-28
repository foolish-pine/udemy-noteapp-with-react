import { FC } from "react";
import { Note } from "types/Note";

import "components/Main.css";

type Props = {
	activeNote: Note | null;
	onUpdateNote: (updatedNote: Note) => void;
};

export const Main: FC<Props> = ({ activeNote, onUpdateNote }) => {
	if (activeNote === null) {
		return <p className="no-active-note">ノートが選択されていません。</p>;
	}

	const onEditNote = (key: string, newValue: string) => {
		onUpdateNote({
			...activeNote,
			[key]: newValue,
			modDate: Date.now(),
		});
	};

	return (
		<div className="app-main">
			<div className="app-main-note-edit">
				<input
					type="text"
					value={activeNote.title}
					onChange={(e) => onEditNote("title", e.target.value)}
				/>
				<textarea
					id="content"
					value={activeNote.content}
					placeholder="ノート内容を記入"
					onChange={(e) => onEditNote("content", e.target.value)}
				></textarea>
			</div>
			<div className="app-main-note-preview">
				<h1 className="preview-title">{activeNote.title}</h1>
				<div className="markdown-preview">{activeNote.content}</div>
			</div>
		</div>
	);
};
