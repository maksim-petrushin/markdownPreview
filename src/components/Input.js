const Input = (props)=>{
    return (
        <div className="inputElement">
            <div className="header">Editor</div>
            <textarea value={props.value} onChange={props.handleChange} className="inputBody">
                <p>Hello output</p>
            </textarea>
        </div>
    )
};

export default Input;