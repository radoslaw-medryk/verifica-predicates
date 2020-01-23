import { Predicate, makeError, ensure } from "verifica-core";
import { isArray } from "./isArray";

export type IsArrayLengthOptions = {
    min?: number;
    max?: number;
};

export function isArrayLength({ min, max }: IsArrayLengthOptions): Predicate<unknown[]> {
    return function _isArrayLength(verificable) {
        const value = ensure(verificable, isArray);
        const length = value.length;

        if ((min !== undefined && length < min) || (max !== undefined && length > max)) {
            return makeError(verificable, {
                type: "isArrayLength",
                min: min,
                max: max,
            });
        }

        return undefined;
    };
}
