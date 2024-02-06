import r2wc from "@r2wc/react-to-web-component"
import { LetterCount } from "../components/LetterCount";

const WCLetterCount = r2wc(LetterCount, {
    props: {
        name: 'string'
    }
});

customElements.define("letter-count", WCLetterCount);

export {} // This file is a module, so it needs to be in strict mode