import { Predicate, rawValue, makeError } from "verifica-core";

export function isOneOf<T>(allowedValues: T[]): Predicate<T> {
    return function _isOneOf(verificable) {
        const value = rawValue(verificable);

        if (allowedValues.indexOf(value as any) === -1) {
            return makeError(verificable, {
                type: "isOneOf",
                allowedValues: [...allowedValues],
            });
        }

        return undefined;
    };
}
