import { FC } from "react";

import "components/Main.css";

export const Main: FC = () => {
	return (
		<div className="app-main">
			<div className="app-main-note-edit">
				<input type="text" />
				<textarea id="" placeholder="ノート内容を記入"></textarea>
			</div>
			<div className="app-main-note-preview">
				<h1 className="preview-title">タイトル</h1>
				<div className="markdown-preview">ノート内容</div>
			</div>
		</div>
	);
};
