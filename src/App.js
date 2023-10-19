
import Input from "./components/Input.js"
import Output from "./components/Output.js"
import React from "react"
import './index.css';

class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      input:"",
      inputStyle: " inputNormal",
      outputStyle: " outputNormal"
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleOutputClick = this.handleOutputClick.bind(this);
  }
  handleChange(event){
    this.setState({
      input :event.target.value
    });
  }
  handleInputClick(){
    this.setState((state)=>{
      if(state.inputStyle===" inputNormal"){
        return {inputStyle:" inputMax",outputStyle:" invisible"}}
      else if(state.inputStyle===" inputMax"){
        return {inputStyle:" inputNormal",outputStyle:" outputNormal" }
      }
      });
  }
  handleOutputClick(){
    this.setState((state)=>{
      if(state.outputStyle===" outputNormal"){
        return {outputStyle:" outputMax",inputStyle:" invisible"}}
      else if(state.outputStyle===" outputMax"){
        return {outputStyle:" outputNormal",inputStyle:" inputNormal"}
      }
      });
  }
  render(){
    return (
      <div className="App">
      <Input inputStyle={this.state.inputStyle} handleInputClick={this.handleInputClick} handleChange={this.handleChange} value={this.state.input}/>
      <Output outputStyle={this.state.outputStyle} handleOutputClick={this.handleOutputClick} text={this.state.input}/>
      
    </div>
  );
}
}

export default App;
