import { createContext } from "react";

const AuthContext = createContext({
	isSignedIn: false,
	handleSignIn: () => {},
	handleSignOut: () => {},
});

export default AuthContext;
