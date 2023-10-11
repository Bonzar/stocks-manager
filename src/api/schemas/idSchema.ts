import type { JSONSchema } from "json-schema-to-ts";

export const idSchema = { type: "number" } as const satisfies JSONSchema;
