interface FormProps {
    prompt: string;
    setPrompt: any;
    onSubmit: any;
    isLoading: boolean;
    characterLimit: number;
}

const Form: React.FC<FormProps> = (props) => {

    // here is where you can change the front end suggested prompt limit
    const isPromptValid = props.prompt.length <= props.characterLimit;
    const updatePromptValue = (text: string) => {
        if (text.length <= props.characterLimit) {
            props.setPrompt(text);
        }
    }

    return (
        <>
            <p>Tell me what your brand is about and I will generate copy and keywords for you.</p>
            <input type='text' placeholder='coffee' value={props.prompt} onChange={(e) => updatePromptValue(e.currentTarget.value)}></input>
            <div>{props.prompt.length}/{props.characterLimit}</div>

            {/* disable the button if the prompt is over the limit */}
            <button onClick={props.onSubmit} disabled={props.isLoading || !isPromptValid}>Submit</button>
        </>
    )
}

export default Form