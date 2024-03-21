import useInputState from "../../hooks/useInputState";


const HookForm = () => {
    // const [name, handleChange] = useInputState('Lolita')
    const emailState = useInputState('lolita@bonita.go')


    const handleSubmit = e => {
        console.log('form data', emailState.value)
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleChange} type="text" name="name" /> <br /> */}
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;