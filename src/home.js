import React from "react";
import './home.css';
import {Link} from 'react-router-dom';
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <>
                <div id='details'>
                    <p> GraphPy</p>
                    <p>
                        Fundamental algoritms for manipulting graphs associated with all forms of mathematical problems. <br />
                        <button><Link to='/documentation'>Documentation</Link></button>
                    </p>
                    
                </div>
                <div id='version'>
                    <p>
                        GraphPy 1.0.0 released ! <br />
                    </p>
                    <p>
                        2023 - 11 - 08 <br />
                    </p>
                </div>
                <div id='features'>
                    <div>
                        <p>FUNDAMENTAL ALGORITHM</p>
                        <p>
                            GraphPy provides algorithms for solving all forms of graph related problems, such as connectedness, existence of an eulerian trail, maximum and minimum path problems e.t.c .
                        </p>
                    </div>
                    <div>
                        <p>BROAD APPLICATION</p>
                        <p>
                            The data structures and algorithms provided by GraphPy includes but no restricted to Graph class, DiGraph class, WeightedGraph class, shortest path algorithm, eulerian graph test, halmitonian graph test algorithms etc.
                        </p>
                    </div>
                    <div>
                        <p>NETWORK ANALYSIS TOOL</p>
                        <p>
                            GraphPy offers comprehensive mathematical structures, well optimized mathemathical methods for dealing all forms of network problems.
                        </p>
                    </div>
                    <div>
                        <p>EASY TO USE</p>
                        <p>
                            GraphPy's high level syntax makes it accessible and productive for programmers and non-programmers from any background or experience level .
                        </p>
                    </div>
                    
                    <div>
                        <p>OPEN SOURCE</p>
                        <p>
                            Distributed under a liberal BSD license, GraphPy is developed and maintained publicly on github by a vibrant, responsive and handsome individual .
                        </p>
                    </div>

                </div>
            </>
        )
    }
}

export default Home;