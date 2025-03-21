import { Suspense, createSignal } from "solid-js";
import "./lib/style/theme.css";
import "./lib/style/reset.css";
import "./lib/style/defaults.css";
import "./lib/style/fixed_size.css";
import "./lib/style/utilities.css";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";

export default function App() {
	return (
		<Router root={(props) => <Suspense>{props.children}</Suspense>}>
			<FileRoutes />
		</Router>
	);
}
