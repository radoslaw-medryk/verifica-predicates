import { Predicate, rawValue, makeError } from "verifica-core";

export const isNumber: Predicate<number> = function isNumber(verificable) {
    const value = rawValue(verificable);

    if (typeof value !== "number") {
        return makeError(verificable, {
            type: "isNumber",
        });
    }

    return undefined;
};
