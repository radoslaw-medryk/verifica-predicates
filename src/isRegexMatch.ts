import { Predicate, makeError, ensure } from "verifica-core";
import { isString } from "./isString";

export function isRegexMatch(regex: RegExp): Predicate<string> {
    return function _isRegexMatch(verificable) {
        const value = ensure(verificable, isString);

        if (!regex.test(value)) {
            return makeError(verificable, {
                type: "isRegexMatch",
            });
        }

        return undefined;
    };
}
