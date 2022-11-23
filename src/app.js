import React from "react";
import "./app.css";
import {Selects} from "./selects/select";
// import axios from "axios";

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <div id='title'>
          <div className='pageTitle'>Escolha da Vez</div>
          <div className='pageSubTitle'>행운을 빌어요 라리</div>
        </div>
        <div id='aside'></div>
        <div id='section'>{Selects}</div>
      </div>
    );
  }
}

export default App;
