import { ErrorMessage, Field } from "formik";
import React from "react";
import { FormField, Label } from "semantic-ui-react";

export default function MyTextInput(props) {
	return (
		<FormField>
			<label>{props.label}</label>
			<Field name={props.name} placeholder={props.label} />
			<ErrorMessage
				name={props.name}
				render={(error) => <Label pointing color="red" content={error} />}
			/>
		</FormField>
	);
}
