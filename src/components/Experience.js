import React from "react";

class Experience extends React.Component {
    constructor(props) {
        super();

        this.state = {companyName: '', position: '', mainTasks: '', start: '', end: '', showCV: false};
        this.addInfo = props.addInfo;

    }

    render() {
        const { showCV } = this.state;
        return (
            <div>
                {!showCV &&
                <div>
                    <form>
                        <input onChange={(e) => {
                            this.setState({companyName: e.target.value});
                        }}
                        placeholder="Company Name"
                        value={this.state.companyName}
                        />
                        <input onChange={(e) => {
                            this.setState({position: e.target.value});
                        }}
                        placeholder="Position"
                        value={this.state.position}
                        />
                        <textarea onChange={(e) => {
                            this.setState({mainTasks: e.target.value});
                        }}
                        placeholder="Main Tasks"
                        type="number"
                        value={this.state.mainTasks}
                        />
                        <input onChange={(e) => {
                            this.setState({start: e.target.value});
                        }}
                        placeholder="Start"
                        type="date"
                        value={this.state.start}
                        />
                        <input onChange={(e) => {
                            this.setState({end: e.target.value});
                        }}
                        placeholder="End"
                        type="date"
                        value={this.state.end}
                        />
                        <button type="submit" onClick={(e) => {
                            this.addInfo(e, this.state);
                            this.setState({showCV: true});
                        }}>poop</button>
                    </form>
                </div>
                }
                {showCV &&
                <div>
                <div>
                    Company Name: {this.state.companyName}
                </div>
                <div>
                    Position: {this.state.position}
                </div>
                <div>
                    Main Tasks: {this.state.mainTasks}
                </div>
                <div>
                    Start: {this.state.start}
                </div>
                <div>
                    End: {this.state.end}
                </div>
                <button onClick={(e) => {
                    this.setState({showCV: false})
                }}>
                Edit
                </button>
                </div>
                }

            </div>
        )
    }
}

export default Experience;