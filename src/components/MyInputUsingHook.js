import { useField } from "formik";
import React from "react";
import { FormField, Label } from "semantic-ui-react";

export default function MyInputUsingHook(props) {
	const [inputProps, metaProps] = useField({
		name: props.name,
		// placeholder: props.label,  // Doesn't work
	});

	return (
		<FormField error={metaProps.touched && !!metaProps.error}>
			<label>{props.label}</label>
			<input
				{...inputProps}
				type={props.type || "text"}
				placeholder={props.label}
			/>
			{metaProps.touched && !!metaProps.error && (
				<Label pointing color="red" content={metaProps.error} />
			)}
		</FormField>
	);
}
