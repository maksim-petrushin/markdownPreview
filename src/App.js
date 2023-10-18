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

    return (
      <div className="App" >
      <Input className="inputElement" handleChange={this.handleChange} value={this.state.input}/>
      <Output className="outputElement" text={this.state.input}/>
    </div>
  );
}
}

export default App;
