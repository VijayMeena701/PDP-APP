import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Provider } from "react-redux";
import store from './redux/store';

function App() {
	return (
		<div className="App">
			<CssBaseline />
			<Provider store={store} >
				<Router>
					<div className="container">
						<Header />
					</div>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
