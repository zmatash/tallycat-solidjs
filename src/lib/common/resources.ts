import spriteKeys from "./generated/icons";

export function getSprite(icon: keyof typeof spriteKeys) {
	return spriteKeys[icon];
}
