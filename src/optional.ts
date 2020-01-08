import { Predicate, rawValue } from "verifica-core";

export function optional<TOut>(predicate: Predicate<TOut>): Predicate<TOut | null | undefined> {
    return function _asOptional(verificable) {
        const value = rawValue(verificable);

        if (value !== null && value !== undefined) {
            return predicate(verificable);
        }
    };
}
