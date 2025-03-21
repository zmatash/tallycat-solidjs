import { Show, createMemo, createSignal } from "solid-js";
import { getSprite } from "~/lib/common/resources";
import styles from "./login-field.module.css";

interface Props {
	fieldType: "email" | "password";
	onChange: (value: string) => void;
}

export default function LoginField(props: Props) {
	let inputElement: HTMLInputElement | undefined;
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

	const [isPasswordHidden, setPasswordHidden] = createSignal(false);
	const inputType = createMemo(() => {
		if (props.fieldType === "email") {
			return "email";
		}
		if (isPasswordHidden()) {
			return "password";
		}
		return "text";
	});

	return (
		<div class={`${styles.container} row_centred`}>
			<svg>
				<title>{renderProps().placeholder}</title>
				<use href={renderProps().icon} />
			</svg>
			<input
				ref={inputElement}
				placeholder={renderProps().placeholder}
				type={inputType()}
				on:change={(e) => props.onChange(e.target.value)}
			/>
			<Show when={renderProps().type === "password"}>
				<button
					class="button_icon"
					on:click={() => setPasswordHidden((prev) => !prev)}
					type="button"
					aria-label={isPasswordHidden() ? "Show password" : "Hide password"}
				>
					<svg>
						<title>{isPasswordHidden() ? "Eye icon" : "Eye-off icon"}</title>
						<use href={getSprite(isPasswordHidden() ? "eye" : "eye-off")} />
					</svg>
				</button>
			</Show>
		</div>
	);
}
