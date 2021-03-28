import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
	return (
		<div className="App">
			<CssBaseline />
			<Router>
				<div className="container">
					<Header />
				</div>
			</Router>
		</div>
	);
}

export default App;
