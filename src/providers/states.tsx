import LoginController from "./login.controller";
import TestController from "./test.controller";

const States = {
    login: new LoginController(),
    test: new TestController(),
}

export default States