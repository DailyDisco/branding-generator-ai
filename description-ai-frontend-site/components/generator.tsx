import React, { useState } from "react";
import Form from "./form";
import Results from "./results";
import Image from "next/image";
import Logo from '../public/logo.svg';

const Generator: React.FC = () => {

    const CHARACTER_LIMIT: number = 32;

    const ENDPOINT: string = 'https://74r01r1hih.execute-api.us-east-1.amazonaws.com/prod/generate_snippet_and_keywords'
    // by using states we can keep track of the input of the user
    const [prompt, setPrompt] = React.useState('');
    const [snippet, setSnippet] = React.useState('');
    const [keywords, setKeywords] = useState([]);
    const [hasResult, setHasResult] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = () => {
        console.log("submitting: " + prompt);
        setIsLoading(true);
        fetch(`${ENDPOINT}?prompt=${prompt}`)
        .then((res) => res.json())
        .then(onResult);
    }

    // this takes the json data when the user clicks the button and sets the state
    // gives you the snippet and keywords as variables you can use
    const onResult = (data: any) => {
        setSnippet(data.snippet);
        setKeywords(data.keywords);
        setHasResult(true);
        setIsLoading(false);
    };

    const onReset = () => {
        setPrompt(''); // reset the prompt
        setHasResult(false);
        setIsLoading(false);
    };

    let displayedElement = null;

    if (hasResult) {
        displayedElement = <Results snippet={snippet} keywords={keywords} onBack={onReset} prompt={prompt}/>
    } else {
        displayedElement = <Form prompt={prompt} setPrompt={setPrompt} onSubmit={onSubmit} isLoading={isLoading} characterLimit={CHARACTER_LIMIT}/>        
    }

    // this makes the texts white and transparent and clips it to the shape of the image
    const gradientTextStyle =
    "text-white text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 font-light w-fit mx-auto";

    return (
        <div className="h-screen flex">
            <div className="max-w-md m-auto p-2">
                <div className="bg-gray-700 p-6 rounded-md text-white">
                    <div className="text-center my-6">
                        {/* <Image src={Logo} width={32} height={32} alt='logo'/> */}
                        <h1 className={gradientTextStyle + "text-3xl font-light w-fit mx-auto"}>Welcome to the AI Branding Description assistant!</h1>
                        <div className={gradientTextStyle}>Generate words with low effort</div>
                    </div>
                    {displayedElement}
                </div>
            </div>
        </div>
    )
}

export default Generator