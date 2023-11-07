import React from "react";
import './installation.css';

class Installation extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div className="installation" style={{color: this.props.color ? "#000000" : "#FFFFFF"}}>
                <h2>INSTALLATION</h2>
                <div className="under"></div>
                <p>
                    The various Installation methods include : <br />
                </p>
                <ul>
                    <li>
                        Distribution
                    </li>
                    <li>
                        Installation via PIP
                    </li>
                    <li>
                        Package Manager
                    </li>
                    <li>
                        Source
                    </li>
                </ul>
                <p>
                    Methods differ in ease of use, coverage, maintenace of old versions, system-wide versus local environment use, and control. With pip you can control the packages versions for a specific project to prevent conflicts . System package managers, like apt-get, install across the entire computer, often have older versions, and don't have as many available versions. Source compilation is more difficult but is necessary for debugging and development . 
                </p>

                <h2>PYTHON DISTRIBUTION</h2>
                <p>
                    Python distributions provide the language itself, along with the most commonly used packages and tools. These dowloadable files require little configuration, work on almost all setups, and provide all the commonly used scientific python tools. <br />
                    Anaconda works on Windows, Mac, and Linux, provides over 1500 python packages, and is used by over 15 million people. Anaconda is best suited to beginning users as it provides a large collection of libraries all in one . <br />
                    Other options include :
                </p>
                <ul>
                    <li>
                        WinPython : Another free distribution including research packages and the Spyder IDE; windows only, but more actively maintained and supports the latest Python versions .
                    </li>
                    <li>
                        Pyzo : A free distribution based on Anaconda and the IEP interactive development environment. Supports Linux and Linux based systems, Windows and Mac .
                    </li>
                </ul>
                <h2>INSTALLATION VIA PIP</h2>
                <p>You can install AllGraph from PyPi with <span className="red">pip</span> :</p>
                <p className="code"> python&#160;&#8209;m&#160;pip&#160;install&#160;allgraph&#160; </p> 
                <h2>INSTALLATION VIA CONDA</h2>
                <p>You can install AllGraph from the <span className="red">defaults</span> or <span className="red">conda-forge</span> channels with <span className="red">conda</span> :</p>
                <p className="code"> conda&#160;install&#160;allgraph&#160; </p>
                <h2>INSTALLATION VIA PACKAGE MANAGER</h2>
                <p>Systems package manager can install themost common python packages. They install packages for the entire computer, often use older versions and doesn't have as many available versions .</p>
                <h3>UBUNTU AND DEBIAN</h3>
                <p>You can install AllGraph for ubuntu and debian OS using it's default package manager <span className="red">apt-get</span> :</p>
                <p className="code"> sudo&#160;apt&#8209;get&#160;install&#160;python3&#8209;allgraph&#160; </p>
                <h3>FEDORA</h3>
                <p>Using <span className="red">dnf</span> :</p>
                <p className="code"> sudo&#160;dnf&#160;install&#160;python3&#8209;allgraph&#160; </p>
                <h3>MACOS</h3>
                <p>Allthough macOS doesn't have a default package manager, you can install Homebrew and use it to intall python and allgraph package :</p>
                <p className="code"> brew&#160;install&#160;allgraph&#160; </p>
                <h2>SOURCE PACKAGES</h2>
                <p>A word of <span className="red">warning</span>: building AllGraph from the source can be a non-trivial exercise. We recommend using binaries instead if those are available for your platform. For details on how to build from source <a href="https://www.google.com">see AllGraph docs</a> .</p> 
            </div>
        )
    }
}

export default Installation;