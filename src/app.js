import { PLATFORM } from "aurelia-pal";

export class App {
  constructor() {
    this.message = "Hello World!";
  }

  configureRouter(config, router) {
    config.title = "Router Test";
    config.map([
      {
        route: "",
        name: "home",
        moduleId: PLATFORM.moduleName("index"),
        title: "Home",
      },
      {
        route: "about",
        name: "about",
        moduleId: PLATFORM.moduleName("about"),
        title: "About Us",
      },
      {
        route: "post/:slug",
        name: "post",
        moduleId: PLATFORM.moduleName("post"),
        title: "View Post",
      },
    ]);
  }
}
