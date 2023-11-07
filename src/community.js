import React from "react";
import './community.css';

class Community extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div className="community" style={{color: this.props.color ? "#000000" : "#FFFFFF"}}>
                <h2>
                    Community Is In It's Developmental Stage .
                </h2>                
            </div>
        )
    }
}

export default Community;