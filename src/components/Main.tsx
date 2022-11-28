import { FC } from "react";
import { Note } from "types/Note";

import "components/Main.css";

type Props = {
	activeNote: Note | null;
};

export const Main: FC<Props> = ({ activeNote }) => {
	if (activeNote === null) {
		return <p className="no-active-note">ノートが選択されていません。</p>;
	}

	return (
		<div className="app-main">
			<div className="app-main-note-edit">
				<input type="text" />
				<textarea id="" placeholder="ノート内容を記入"></textarea>
			</div>
			<div className="app-main-note-preview">
				<h1 className="preview-title">{activeNote.title}</h1>
				<div className="markdown-preview">{activeNote.content}</div>
			</div>
		</div>
	);
};
