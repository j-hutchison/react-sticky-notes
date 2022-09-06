import { useState } from "react";

import "./App.css";

import Searchbar from "./components/navigation/Searchbar";
import Toolbar from "./components/navigation/Toolbar";
import Notes from "./components/Notes/Notes";

function App() {
	const [searchQuery, setSearchQuery] = useState("");
	const [isDarkMode, setIsDarkMode] = useState(false);

	return (
		<div className={!isDarkMode ? "app" : "app dark"}>
			<Toolbar darkMode={isDarkMode} setMode={setIsDarkMode}>
				<Searchbar setSearchQuery={setSearchQuery} />
			</Toolbar>
			<Notes query={searchQuery} />
		</div>
	);
}

export default App;
