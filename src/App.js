import { ToastContainer } from "react-toastify";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Dashboard from "./layouts/Dashboard";

function App() {
	return (
		<div className="App">
			<Dashboard />
			<ToastContainer position="bottom-right" />
		</div>
	);
}

export default App;
