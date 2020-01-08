import { Predicate, makeError, ensure } from "verifica-core";
import { isNumber } from "./isNumber";

export const isFiniteNumber: Predicate<number> = function isFiniteNumber(verificable) {
    const value = ensure(verificable, isNumber);

    if (!Number.isFinite(value)) {
        return makeError(verificable, {
            type: "isFiniteNumber",
        });
    }

    return undefined;
};
