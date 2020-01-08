import { Predicate, makeError, ensure } from "verifica-core";
import { isInteger } from "./isInteger";

export type IsIntegerInRangeOptions = {
    min?: number;
    max?: number;
};

export function isIntegerInRange({ min, max }: IsIntegerInRangeOptions): Predicate<number> {
    return function _isIntegerInRange(verificable) {
        const value = ensure(verificable, isInteger);

        if ((min !== undefined && value < min) || (max !== undefined && value > max)) {
            return makeError(verificable, {
                type: "isIntegerInRange",
                min: min,
                max: max,
            });
        }

        return undefined;
    };
}
