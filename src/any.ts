import { Predicate, makeError, VerificaError, getErrors } from "verifica-core";

export function any(): Predicate<never>;
export function any<T1>(p1: Predicate<T1>): Predicate<T1>;
export function any<T1, T2>(p1: Predicate<T1>, p2: Predicate<T2>): Predicate<T1 | T2>;
export function any<T1, T2, T3>(p1: Predicate<T1>, p2: Predicate<T2>, p3: Predicate<T3>): Predicate<T1 | T2 | T3>;
export function any<T1, T2, T3, T4>(
    p1: Predicate<T1>,
    p2: Predicate<T2>,
    p3: Predicate<T3>,
    p4: Predicate<T4>
): Predicate<T1 | T2 | T3 | T4>;
export function any<T1, T2, T3, T4, T5>(
    p1: Predicate<T1>,
    p2: Predicate<T2>,
    p3: Predicate<T3>,
    p4: Predicate<T4>,
    p5: Predicate<T5>
): Predicate<T1 | T2 | T3 | T4 | T5>;
export function any<T1, T2, T3, T4, T5, T6>(
    p1: Predicate<T1>,
    p2: Predicate<T2>,
    p3: Predicate<T3>,
    p4: Predicate<T4>,
    p5: Predicate<T5>,
    p6: Predicate<T6>
): Predicate<T1 | T2 | T3 | T4 | T5 | T6>;
export function any<T1, T2, T3, T4, T5, T6, T7>(
    p1: Predicate<T1>,
    p2: Predicate<T2>,
    p3: Predicate<T3>,
    p4: Predicate<T4>,
    p5: Predicate<T5>,
    p6: Predicate<T6>,
    p7: Predicate<T7>
): Predicate<T1 | T2 | T3 | T4 | T5 | T6 | T7>;
export function any<T1, T2, T3, T4, T5, T6, T7, T8>(
    p1: Predicate<T1>,
    p2: Predicate<T2>,
    p3: Predicate<T3>,
    p4: Predicate<T4>,
    p5: Predicate<T5>,
    p6: Predicate<T6>,
    p7: Predicate<T7>,
    p8: Predicate<T8>
): Predicate<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8>;
export function any(...predicates: Predicate<unknown>[]): Predicate<unknown> {
    return function _any(verificable) {
        const errors: VerificaError[] = [];

        for (const predicate of predicates) {
            const predicateErrors = getErrors(verificable, predicate);
            errors.push(...predicateErrors);

            if (predicateErrors.length === 0) {
                return undefined;
            }
        }

        return makeError(verificable, {
            type: "any",
            errors,
        });
    };
}
