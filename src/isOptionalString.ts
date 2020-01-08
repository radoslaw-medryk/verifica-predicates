import { optional } from "./optional";
import { isString } from "./isString";

export const isOptionalString = optional(isString);
