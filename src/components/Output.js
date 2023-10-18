const Output = (props)=>{
    return (
        <div className="outputElement">
            <div className="header">Previewer</div>
            <textarea value={props.text} className="previewerBody">
                <p>Hello output</p>
            </textarea>
            
        </div>
    )
};

export default Output;