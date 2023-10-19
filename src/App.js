import Input from "./components/Input.js"
import Output from "./components/Output.js"
import React from "react"
import './index.css';

class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      input:""
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({
      input :event.target.value
    });
  }
  render(){
    const arr = this.state.input.split("\n")
    const styleArr = arr.map((obj)=>{
      //h1
      if(/^#$/.test(obj)){
        return "h1";
      }
      if(/^##$/.test(obj)){
        return "h2";
      }
      if(/^###$/.test(obj)){
        return "h3";
      }
      else if(/^#\s/.test(obj)){
        return "h1";
      }
      else if(/^##\s/.test(obj)){
        return "h2";
      }
      else if(/^###\s/.test(obj)){
        return "h3";
      }
      else{
        return "normal"
      }
    })
    const modifiedArr = arr.map((obj)=>{
      //h1
      if(/^#$/.test(obj)){
        return " ";
      }
      if(/^##$/.test(obj)){
        return " ";
      }
      if(/^###$/.test(obj)){
        return " ";
      }
      else if(/^#\s/.test(obj)){
        return obj.slice(2, obj.length);
      }
      else if(/^##\s/.test(obj)){
        return obj.slice(3, obj.length);
      }
      else if(/^###\s/.test(obj)){
        return obj.slice(4, obj.length);
      }
      else{
        return obj
      }
    })
    return (
      <div className="App" >
      <Input className="inputElement" handleChange={this.handleChange} value={this.state.input}/>
      <Output className="outputElement" arr={arr} styleArr={styleArr} modifiedArr={modifiedArr} text={this.state.input}/>
    </div>
  );
}
}

export default App;
