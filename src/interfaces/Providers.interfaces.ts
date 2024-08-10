import { Dispatch, SetStateAction } from "react";

export class ProviderControllerI<T> {
  // @ts-ignore
  protected value: T;

  // @ts-ignore
  protected setValue: (value: Partial<T>) => void;

  injectDispatchs(value: typeof this.value, set: typeof this.setValue) {
    this.value = value;
    this.setValue = set;
  }

  /** @override */
  init() {}
}
