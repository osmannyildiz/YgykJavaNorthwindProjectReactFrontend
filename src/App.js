import { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import AuthContext from "./contexts/authContext";
import CartDetailPage from "./pages/CartDetailPage";
import ProductAddPage from "./pages/ProductAddPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
	const history = useHistory();

	const [isSignedIn, setIsSignedIn] = useState(false);
	function handleSignIn() {
		setIsSignedIn(true);
	}
	function handleSignOut() {
		setIsSignedIn(false);
		history.replace("/");
	}

	return (
		<div className="App">
			<AuthContext.Provider value={{ isSignedIn, handleSignIn, handleSignOut }}>
				<Switch>
					<Route exact path={["/", "/products"]} component={ProductsPage} />
					<Route exact path="/products/add" component={ProductAddPage} />
					<Route path="/products/:id" component={ProductDetailPage} />
					<Route path="/cart" component={CartDetailPage} />
				</Switch>
				<ToastContainer position="bottom-right" />
			</AuthContext.Provider>
		</div>
	);
}

export default App;
