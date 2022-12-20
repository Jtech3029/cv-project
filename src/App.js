import React, { Component } from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import GeneralInfo from "./components/GeneralInfo";

class App extends Component {
  constructor() {
    super();

    this.state = {GeneralInfo: {}, Education: {}, Experience: {}};
    this.addInformation = this.addInformation.bind(this);
  }

  addInformation(e, info) {
    e.preventDefault();
    this.setState({GeneralInfo: info});
  }

  render() {
    return (
      <div> 
        <GeneralInfo addInfo={this.addInformation} />
        <Education addInfo={this.addInformation}/>
        <Experience addInfo={this.addInformation}/>
      </div>
    );
  }
}

export default App;
