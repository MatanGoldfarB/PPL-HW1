import { Result, makeFailure, makeOk, bind, either } from "../lib/result";

/* Library code */
const findOrThrow = <T>(pred: (x: T) => boolean, a: T[]): T => {
    for (let i = 0; i < a.length; i++) {
        if (pred(a[i])) return a[i];
    }
    throw "No element found.";
}

export const findResult = <T>(pred: (x: T) => boolean, a:T[]): Result<T> => {
    const filtered = a.filter(pred);
    return filtered.length===0 ? makeFailure("no such element exist") : makeOk(filtered[0]);
};

/* Client code */
const returnSquaredIfFoundEven_v1 = (a: number[]): number => {
    try {
        const x = findOrThrow(x => x % 2 === 0, a);
        return x * x;
    } catch (e) {
        return -1;
    }
}

export const returnSquaredIfFoundEven_v2 = (a: number[]): Result<number> => {
    const isEven = (x: number): boolean => x % 2 === 0;
    const square = (x: number): Result<number> => makeOk(x * x);

    return bind(findResult(isEven, a), square);
};

export const returnSquaredIfFoundEven_v3 = (a: number[]): number => {
    const isEven = (x: number): boolean => x % 2 === 0;

    return either(
        findResult(isEven, a),
        (value) => value * value,
        () => -1
    );
};