import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOutActions(props) {
	return (
		<Menu.Menu position="right">
			<Menu.Item>
				<Button primary>Kayıt Ol</Button>
				<Button
					primary
					style={{ marginLeft: "1em" }}
					onClick={props.handleSignIn}
				>
					Giriş Yap
				</Button>
			</Menu.Item>
		</Menu.Menu>
	);
}
