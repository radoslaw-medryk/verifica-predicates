import { Predicate, makeError, ensure } from "verifica-core";
import { isFiniteNumber } from "./isFiniteNumber";

export type IsNumberInRangeOptions = {
    min?: number;
    max?: number;
};

export function isNumberInRange({ min, max }: IsNumberInRangeOptions): Predicate<number> {
    return function _isNumberInRange(verificable) {
        const value = ensure(verificable, isFiniteNumber);

        if ((min !== undefined && value < min) || (max !== undefined && value > max)) {
            return makeError(verificable, {
                type: "isNumberInRange",
                min: min,
                max: max,
            });
        }

        return undefined;
    };
}
