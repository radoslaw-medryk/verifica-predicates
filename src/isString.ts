import { Predicate, rawValue, makeError } from "verifica-core";

export const isString: Predicate<string> = function isString(verificable) {
    const value = rawValue(verificable);

    if (typeof value !== "string") {
        return makeError(verificable, {
            type: "isString",
        });
    }

    return undefined;
};
