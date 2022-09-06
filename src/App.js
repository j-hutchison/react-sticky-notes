import "./App.css";
import Searchbar from "./components/navigation/Searchbar";
import Toolbar from "./components/navigation/Toolbar";
import Notes from "./components/Notes/Notes";

function App() {
	return (
		<div className="app">
			<Toolbar>
				<Searchbar />
			</Toolbar>
			<Notes />
		</div>
	);
}

export default App;
