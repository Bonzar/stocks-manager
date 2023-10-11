export {};

declare global {
  type IdType = number;

  type RemoveIndex<T> = T extends unknown[]
    ? RemoveIndex<T[number]>[]
    : {
        [K in keyof T as string extends K
          ? never
          : number extends K
          ? never
          : symbol extends K
          ? never
          : K]: T[K] extends object ? RemoveIndex<T<K>> : T[K];
      };
}
