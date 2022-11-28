import { FC } from "react";
import { Note } from "types/Note";

import "components/Sidebar.css";

type Props = {
	noteList: Note[];
	onAddNote: () => void;
	onDeleteNote: (id: string) => void;
};

export const Sidebar: FC<Props> = ({ noteList, onAddNote, onDeleteNote }) => {
	return (
		<aside className="app-sidebar">
			<div className="app-sidebar-header">
				<h1>ノート</h1>
				<button onClick={onAddNote}>追加</button>
			</div>
			<div className="app-sidebar-notes">
				{noteList.map((note) => (
					<div className="app-sidebar-note" key={note.id}>
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
