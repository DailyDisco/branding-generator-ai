import React, { useState } from "react";

const Generator: React.FC = () => {

    // by using states we can keep track of the input of the user
    const [prompt, setPrompt] = React.useState('');

    const onSubmit = () => {
        console.log("submitting: " + prompt);
    }

    return (
        <>
            <h1>Hello!</h1>
            <p>Tell me what your brand is about and I will generate copy and keywords for you.</p>
            <input type='text' placeholder='coffee' value={prompt} onChange={(e) => setPrompt(e.currentTarget.value)}></input>
            <button onClick={onSubmit}>Submit</button>
        </>
    )
}

export default Generator