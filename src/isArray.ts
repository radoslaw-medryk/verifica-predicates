import { Predicate, rawValue, makeError } from "verifica-core";

export const isArray: Predicate<unknown[]> = function isArray(verificable) {
    const value = rawValue(verificable);

    if (!Array.isArray(value)) {
        return makeError(verificable, {
            type: "isArray",
        });
    }

    return undefined;
};
