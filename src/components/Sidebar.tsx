import { FC } from "react";
import { Note } from "types/Note";

import "components/Sidebar.css";

type Props = {
	noteList: Note[];
	onAddNote: () => void;
	onDeleteNote: (id: string) => void;
	activeNoteId: string;
	setActiveNoteId: React.Dispatch<React.SetStateAction<string>>;
};

export const Sidebar: FC<Props> = ({
	noteList,
	onAddNote,
	onDeleteNote,
	activeNoteId,
	setActiveNoteId,
}) => {
	return (
		<aside className="app-sidebar">
			<div className="app-sidebar-header">
				<h1>ノート</h1>
				<button onClick={onAddNote}>追加</button>
			</div>
			<div className="app-sidebar-notes">
				{noteList
					.sort((a, b) => b.modDate - a.modDate)
					.map((note) => (
						<div
							className={
								note.id === activeNoteId
									? "app-sidebar-note is-active"
									: "app-sidebar-note"
							}
							key={note.id}
							onClick={() => {
								setActiveNoteId(note.id);
							}}
						>
							<div className="sidebar-note-title">
								<strong>{note.title}</strong>
								<button onClick={() => onDeleteNote(note.id)}>削除</button>
							</div>
							<p>{note.content}</p>
							<small>
								最終更新日：{new Date(note.modDate).toLocaleDateString("ja-JP")}
							</small>
						</div>
					))}
			</div>
		</aside>
	);
};
