import { Predicate, rawValue, makeError } from "verifica-core";

export const isObject: Predicate<object> = function isObject(verificable) {
    const value = rawValue(verificable);

    if (typeof value !== "object" || value === null) {
        return makeError(verificable, {
            type: "isObject",
        });
    }

    return undefined;
};
