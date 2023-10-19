import React from "react"
class Output extends React.Component{
    
    render(){   
        const paragraphs = this.props.modifiedArr.map((obj,index)=>{return <p id={index} className={this.props.styleArr[index]}> {obj}</p>});
        
        return (
            <div className="outputElement">
            <div className="header">Previewer</div>
            <div className="previewerBody">
                {paragraphs}
            </div>
            
        </div>
    )
    } 
};

export default Output;