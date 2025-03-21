import type { RouteSectionProps } from "@solidjs/router";
import styles from "./login.module.css";

export default function LoginLayout(props: RouteSectionProps) {
	return (
		<main class={`${styles.main} fill_screen col_centred pad_16`}>
			{props.children}
		</main>
	);
}
