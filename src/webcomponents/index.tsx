import r2wc from "@r2wc/react-to-web-component"
import { Greeting } from "./Greeting"

const WebGreeting = r2wc(Greeting)
customElements.define("web-greeting", WebGreeting);

export {} // This file is a module, so it needs to be in strict mode