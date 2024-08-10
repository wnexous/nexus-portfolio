import { ProviderControllerI } from "@/interfaces/Providers.interfaces";

// u can insert logical data login here
interface LoginInterface {
  username: string;
  password: string;
}

export default class LoginController extends ProviderControllerI<LoginInterface> {
  // need use init method to initialize this class
  init() {
    this.setValue({ password: "senha" });
    this.setValue({ username: "usuario" });
  }

  getUsername() {
    return this.value?.username ?? "sem usuario";
  }
  getPass() {
    return this.value?.password ?? "sem usuario";
  }
}
