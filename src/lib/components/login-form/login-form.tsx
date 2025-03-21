import { createSignal } from "solid-js";
import LoginField from "./login-field";
import styles from "./login-form.module.css";

export default function LoginForm() {
	const [header, setHeader] = createSignal("Sign In");

	return (
		<div class={`${styles.login_form_container} fill_parent pad16 gap16`}>
			<span class={styles.header_text}>{header()}</span>
			<form class={"col_centred gap16"}>
				<LoginField fieldType={"email"} />
				<LoginField fieldType={"password"} />
			</form>
		</div>
	);
}
