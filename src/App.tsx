import { FC } from "react";
import { Main } from "components/Main";
import { Sidebar } from "components/Sidebar";

import "App.css";

export const App: FC = () => {
	return (
		<div className="App">
			<Sidebar />
			<Main />
		</div>
	);
};
