import { Predicate, makeError, ensure } from "verifica-core";
import { isNumber } from "./isNumber";

export const isInteger: Predicate<number> = function isInteger(verificable) {
    const value = ensure(verificable, isNumber);

    if (!Number.isInteger(value)) {
        return makeError(verificable, {
            type: "isInteger",
        });
    }

    return undefined;
};
