import React from "react";

class Education extends React.Component {
    constructor(props) {
        super();

        this.state = {info1: '', info2: '', info3: '', info4: '', showCV: false};
        this.addInfo = props.addInfo;
    }

    render() {
        const { showCV } = this.state;

        return (
            <div>
                { !showCV &&
                <form>
                    <input placeholder="School" value={this.state.info1} onChange={(e) => {
                        this.setState({info1: e.target.value});
                    }}/>
                    <input placeholder="Major" value={this.state.info2} onChange={(e) => {
                        this.setState({info2: e.target.value});
                    }}/>
                    <input placeholder="From" value={this.state.info3} type="date" onChange={(e) => {
                        this.setState({info3: e.target.value});
                    }}/>
                    <input placeholder="To" value={this.state.info4} type="date" onChange={(e) => {
                        this.setState({info4: e.target.value});
                    }}/>
                    <button type="submit" onClick={(e) => {
                        this.addInfo(e, this.state);
                        this.setState({showCV: true});
                    }}>Other Poop</button>
                </form>
                }
                { showCV &&
                <div>
                    <div>
                        School: {this.state.info1}
                    </div>
                    <div>
                        Major: {this.state.info2}
                    </div>
                    <div>
                        From: {this.state.info3}
                    </div>
                    <div>
                        To: {this.state.info4}
                    </div>
                    <button onClick={(e) => {
                        this.setState({showCV: false});
                    }}>
                    Edit
                    </button>
                </div>
                }
            </div>
        )
    }
}

export default Education