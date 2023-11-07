import React from "react";
import './documentation.css';
import {Link} from 'react-router-dom'

class Documentation extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div className="documentation" style={{color: this.props.color ? "#000000" : "#FFFFFF"}}>
                <h2>
                    GraphPy documentation
                </h2>
                <p>
                    Version : 1.00
                </p>
                <p>
                    Useful links : <Link to='/installation'>Installation</Link>  | <a href="https://www.google.com">Source Repository</a>  | <a href="https://www.google.com">Contact Developer</a> 
                </p>
                <p>
                    GraphPy is the fundamental package for storing and manipulating graphs arising from all spheres of human endevours . It is a python library that provides a multidimensional graph object, various derived objects (such as weighted graphs, directed graphs) and an assortment of mathematical and logical routines for fast operations on graphs, including connectedness, maximum and minimum paths problem, eulerian trail problems, basic graph maipulations and much more . 
                </p>
                <h2>
                    GraphPy Reference
                </h2>
                <p>
                    This reference manual details classes, modules (data structures) for representiong or storing graphs and functions for manipulating graphs, telling what they are and what they do .
                </p>
                <h3>Objects</h3>
                <h5>GRAPH</h5>
                <p>
                    Graph module is the base class for all other objects within GraphPy package. It is initiallized with a 2&#8209;dimensional list (adjacency matrix of the graph) whose ijth entries are either 0 or 1 depending on whether vertex i + 1 is adjacent to vertex j + 1 .  
                </p>
                <p className="code">
                    # variable x is a Graph Object <br />
                    x = Graph([[1,0],[0,1]])
                </p>
                <p>
                    The Graph class also contains method for manipulating graphs, methods for graph searching or navigation and methods for determining certain properties of graphs, some of which are listed below :
                </p>
                <dl>
                    <dt>isconnected :</dt>
                    <dd>This method checks If A graph with the associated matrix is connected, returns True if it is connected else False .</dd>
                </dl>
                <dl>
                    <dt>iseulerian :</dt>
                    <dd>This method checks If A graph with the associated matrix is eulerian, returns True if it is eulerian else False .</dd>
                </dl>
                <dl>
                    <dt>issimple :</dt>
                    <dd>This method checks If A graph with the associated matrix is simple, returns True if it is simple else False .</dd>
                </dl>
                <dl>
                    <dt>isdisconnectingset :</dt>
                    <dd>This method checks If A list of edges is a disconnecting set of the graph, returns True if it is a disconnecting set else False .</dd>
                </dl>
                <h5>WEIGHTEDGRAPH</h5>
                <p>
                    WeightedGraph module another module within GraphPy package which is used to model a weighted graph. It inherits from base Graph class. It is initiallized with two  2&#8209;dimensional list (adjacency matrix of the graph and weights matrix of the graph) .  
                </p>
                <p className="code">
                    # variable x is a WeightedGraph Object <br />
                    x = WeightedGraph([[1,0],[0,1]], [[2,0],[0,10]])
                </p>
                <p>
                    Along with inherited methods, the WeightedGraph class also contains method for manipulating graphs, methods for graph searching or navigation and methods for determining certain properties of graphs, some of which are listed below :
                </p>
                <dl>
                    <dt>isconnected :</dt>
                    <dd>This method checks If A graph with the associated matrix is connected, returns True if it is connected else False .</dd>
                </dl>
                <dl>
                    <dt>iseulerian :</dt>
                    <dd>This method checks If A graph with the associated matrix is eulerian, returns True if it is eulerian else False .</dd>
                </dl>
                <dl>
                    <dt>issimple :</dt>
                    <dd>This method checks If A graph with the associated matrix is simple, returns True if it is simple else False .</dd>
                </dl>
                <dl>
                    <dt>isdisconnectingset :</dt>
                    <dd>This method checks If A list of edges is a disconnecting set of the graph, returns True if it is a disconnecting set else False .</dd>
                </dl>
                <h5>BIGNODEGRAPH</h5>
                <p>
                    BigNodeGraph module another module within GraphPy package which is used to model a graph with a large vertex set but a small edge set. It inherits from base Graph class. It is initiallized with a list of tuples (edge set of the graph) and a number(cardinal of vertex set).  
                </p>
                <p className="code">
                    # variable x is a BigNodeGraph Object <br />
                    x = BigNodeGraph([(1,0),(3,2)], 100)
                </p>
                <p>
                    Along with inherited methods, the BigNodeGraph class also contains other methods, some of which are listed below :
                </p>
                <dl>
                    <dt>isconnected :</dt>
                    <dd>This method checks If A graph with the associated matrix is connected, returns True if it is connected else False .</dd>
                </dl>
                <dl>
                    <dt>iseulerian :</dt>
                    <dd>This method checks If A graph with the associated matrix is eulerian, returns True if it is eulerian else False .</dd>
                </dl>
                <dl>
                    <dt>issimple :</dt>
                    <dd>This method checks If A graph with the associated matrix is simple, returns True if it is simple else False .</dd>
                </dl>
                <dl>
                    <dt>isdisconnectingset :</dt>
                    <dd>This method checks If A list of edges is a disconnecting set of the graph, returns True if it is a disconnecting set else False .</dd>
                </dl>
                <p>
                    A large part of this manual originated from <a href="https://www.google.com">GraphPy documentation</a> which was single handedly written by Odimayo T. Moses .
                </p>
            </div>
        )
    }
}

export default Documentation;