import React, {Component} from 'react';

import './App.css';
import CrewMember from './CrewMember';
import logo from '../logo.png'


class App extends Component {

    componentDidMount(){
     this.props.loadCrewMembersAction();
    }

    renderCrewMembers = (hiringStatus) => (
        this.props.crewMembers.filter(item => item.hiringStatus === hiringStatus)
          .map((props, index) => (
            <CrewMember
                {...props}
                key={index}
            />
        ))
    );

    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">OpenOceanStudio: Crew Applications</h1>
            </header>
            <div className="container">
               <div className="section">
                  <h1>Applied</h1>
                  {this.renderCrewMembers('applied')}
               </div>
              <div className="section">
                <h1>Interviewing</h1>
                {this.renderCrewMembers('interviewing')}
              </div>
              <div className="section">
                <h1>Hired</h1>
                {this.renderCrewMembers('hired')}
              </div>
            </div>
          </div>
        );
    }
}

export default App;




