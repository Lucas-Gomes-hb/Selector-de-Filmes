import React from "react";
import "./app.css";
import { Selects } from "./selects/select";
import {CheckBox} from "./checkbox/checkbox";
// import axios from "axios";

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <div id='title' className="title">
          <div className='pageTitle'>Escolha da Vez</div>
          <div className='pageSubTitle'>행운을 빌어요 라리</div>
        </div>
        <div id='section'>
          {CheckBox}
          {Selects}
        </div>
      </div>
    );
  }
}

export default App;
