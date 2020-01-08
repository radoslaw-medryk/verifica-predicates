import { Predicate, ensure, VerificaChunk } from "verifica-core";
import { isArray } from "./isArray";

export function isArrayOf<TItem>(itemPredicate: Predicate<TItem>): Predicate<TItem[]> {
    return function _isArrayOf(verificable) {
        const value = ensure(verificable, isArray);

        const chunk = new VerificaChunk();
        for (let i = 0; i < value.length; i++) {
            chunk.add(verificable[i], itemPredicate);
        }
        return chunk.getAllErrors();
    };
}
