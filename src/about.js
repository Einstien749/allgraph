import React from "react";
import './about.css';

class About extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div className="about" style={{color: this.props.color ? "#000000" : "#FFFFFF"}}>
                <h2>ABOUT US</h2>
                <div className="under"></div>
                <p>
                    GraphPy is an open source project that enables all forms of network analysis with Python. It was singlehandedly created in 2023 by Odimayo Taiye Moses . GraphPy will always be a 100% open source software and free for all to use. It is released under the liberal terms of the <a href="https://www.google.com">modified BSD license</a> .<br /><br />
                    GraphPy is developed in the open on GitHub, through the consensus of Odimayo Taiye Moses and the wider python community .  
                </p>
                <h2>Teams</h2>
                <p>
                    The GraphPy project leadership is actively working on diversifying contribution pathways to the project. GraphPycurrently has the following teams : <br />

                </p>
                <ul>
                    <li>
                        development
                    </li>
                    <li>
                        documentation
                    </li>
                    <li>
                        website
                    </li>
                </ul>
                <h3>
                    Development
                </h3>
                <p>
                    This team is solely responsible for implementing the various features GraphPy package, deciding which features is should be implemented and discarded, versioning, maintenace of the GraphPy package .<br />The development team consist of the below personalities : <br />  
                </p>
                <ul>
                    <li>
                        Odimayo Taiye Moses
                    </li>
                </ul>
                <h3>
                    Documentation
                </h3>
                <p>
                    This team is responsible providing standard documentation GraphPy package. The development team consist of the below personalities : <br />  
                </p>
                <ul>
                    <li>
                        Odimayo Taiye Moses
                    </li>
                    <li>
                        Odimayo Idowu David
                    </li>
                </ul>
                <h3>
                    Website
                </h3>
                <p>
                    This team is responsible developing the official website of GraphPy package, ensuring ease of navigation and a very pleasant user experience. The development team consist of the below personalities : <br />  
                </p>
                <ul>
                    <li>
                        Emmanuel Olagoke
                    </li>
                    <li>
                        Odimayo Taiye Moses
                    </li>
                    <li>
                        Odimayo Idowu David
                    </li>
                </ul>
            </div>
        )
    }
}

export default About;