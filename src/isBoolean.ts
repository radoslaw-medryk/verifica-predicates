import { Predicate, rawValue, makeError } from "verifica-core";

export const isBoolean: Predicate<boolean> = function isBoolean(verificable) {
    const value = rawValue(verificable);

    if (typeof value !== "boolean") {
        return makeError(verificable, {
            type: "isBoolean",
        });
    }

    return undefined;
};
