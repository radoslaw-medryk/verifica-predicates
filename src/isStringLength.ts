import { Predicate, makeError, ensure } from "verifica-core";
import { isString } from "./isString";

export type IsStringLengthOptions = {
    min?: number;
    max?: number;
};

export function isStringLength({ min, max }: IsStringLengthOptions): Predicate<string> {
    return function _isStringLength(verificable) {
        const value = ensure(verificable, isString);
        const length = value.length;

        if ((min !== undefined && length < min) || (max !== undefined && length > max)) {
            return makeError(verificable, {
                type: "isStringLength",
                min: min,
                max: max,
            });
        }

        return undefined;
    };
}
