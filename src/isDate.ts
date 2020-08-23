import { Predicate, rawValue, makeError } from "verifica-core";

export const isDate: Predicate<Date> = function isDate(verificable) {
    const value = rawValue(verificable);

    // TODO [RM]: possible false-negatives:
    // https://stackoverflow.com/questions/643782/how-to-check-whether-an-object-is-a-date
    if (!(value instanceof Date)) {
        return makeError(verificable, {
            type: "isDate",
        });
    }

    return undefined;
};
