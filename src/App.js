import { useState } from "react";

import "./App.css";

import Searchbar from "./components/navigation/Searchbar";
import Toolbar from "./components/navigation/Toolbar";
import Notes from "./components/Notes/Notes";

function App() {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<div className="app">
			<Toolbar>
				<Searchbar setSearchQuery={setSearchQuery} />
			</Toolbar>
			<Notes query={searchQuery} />
		</div>
	);
}

export default App;
