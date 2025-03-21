"use server";
import {
	createServerClient,
	parseCookieHeader,
	serializeCookieHeader,
} from "@supabase/ssr";
import { getRequestEvent } from "solid-js/web";

export function createClient() {
	console.log;
	return createServerClient(
		import.meta.env.VITE_SUPABASE_URL,
		import.meta.env.VITE_SUPABASE_ANON_KEY,
		{
			cookies: {
				getAll() {
					const parsedCookies = parseCookieHeader(
						getRequestEvent()?.request.headers.get("Cookie") ?? "",
					);

					return parsedCookies
						.filter((cookie) => cookie.value !== undefined)
						.map((cookie) => ({
							name: cookie.name,
							value: cookie.value ?? "",
						}));
				},
				setAll(cookiesToSet) {
					for (const cookie of cookiesToSet) {
						getRequestEvent()?.response.headers.append(
							"Set-Cookie",
							serializeCookieHeader(cookie.name, cookie.value, cookie.options),
						);
					}
				},
			},
		},
	);
}
