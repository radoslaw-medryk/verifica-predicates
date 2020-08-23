import { Predicate, rawValue, makeError } from "verifica-core";

export function isExactly<T>(allowedValue: T): Predicate<T> {
    return function _isExactly(verificable) {
        const value = rawValue(verificable);

        if (value !== allowedValue) {
            return makeError(verificable, {
                type: "isExactly",
                allowedValue: allowedValue,
            });
        }

        return undefined;
    };
}
