export type Person = {
    fname: string;
    lname?: string; // optional
    isMarried: boolean;
    children?: string [];
    getFullName: () => string;
    getAge?: (num: number, name: string) => number
}