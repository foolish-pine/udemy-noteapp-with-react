import { FC } from "react";

import "components/Sidebar.css";

export const Sidebar: FC = () => {
	return (
		<aside className="app-sidebar">
			<div className="app-sidebar-header">
				<h1>ノート</h1>
				<button>追加</button>
			</div>
			<div className="app-sidebar-notes">
				<div className="app-sidebar-note">
					<div className="sidebar-note-title">
						<strong>タイトル</strong>
						<button>削除</button>
					</div>
					<p>ノートの内容です。</p>
					<small>最終更新日：2022/12/01</small>
				</div>
			</div>
		</aside>
	);
};
