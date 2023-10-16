export abstract class BaseFieldsValidator {
  protected assertsDefined<T>(
    arg: T | undefined,
    errorMsg: string,
  ): asserts arg is T {
    if (arg === undefined) {
      throw new Error(errorMsg);
    }
  }

  protected getValueOrDefault<T>(arg: T | undefined, defaultValue: T): T {
    return arg ?? defaultValue;
  }
}
