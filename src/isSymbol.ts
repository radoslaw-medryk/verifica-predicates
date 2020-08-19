import { Predicate, rawValue, makeError } from "verifica-core";

export const isSymbol: Predicate<symbol> = function isSymbol(verificable) {
    const value = rawValue(verificable);

    if (typeof value !== "symbol") {
        return makeError(verificable, {
            type: "isSymbol",
        });
    }

    return undefined;
};
