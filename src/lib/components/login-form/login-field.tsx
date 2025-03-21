import { createMemo } from "solid-js";
import { getSprite } from "~/lib/common/resources";
import styles from "./login-field.module.css";

interface Props {
	fieldType: "email" | "password";
}

export default function LoginField(props: Props) {
	const renderProps = createMemo(() => {
		if (props.fieldType === "email") {
			return {
				icon: getSprite("mail"),
				placeholder: "Email",
				type: "email",
			};
		}
		return {
			icon: getSprite("lock-keyhole"),
			placeholder: "Password",
			type: "password",
		};
	});

	return (
		<div class={`${styles.container} row_centred`}>
			<svg>
				<title>{renderProps().placeholder}</title>
				<use href={renderProps().icon} />
			</svg>
			<input
				placeholder={renderProps().placeholder}
				type={renderProps().type}
			/>
		</div>
	);
}
