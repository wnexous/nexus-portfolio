import { ProviderControllerI } from "@/interfaces/Providers.interfaces";

// u can insert logical data login here
interface TestInterface {
  test: string;
}

export default class TestController extends ProviderControllerI<TestInterface> {
  // need use init method to initialize this class
  init() {
    this.setValue({ test: "test" });
  }

  getTest() {
    return this.value?.test ?? "sem test";
  }
}
