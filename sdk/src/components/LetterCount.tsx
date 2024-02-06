import { useState } from "react";

export const LetterCount = () => {
    const [value, setValue] = useState("");
    return <div style={{border: '1px solid black', padding: '16px'}}>
        <h2>Hi, I'm a react component!</h2>
        <input type="text" value={value} onChange={(e) => setValue(e.currentTarget.value)} />
        <p>Letter count: {value.length}</p>
    </div>
}