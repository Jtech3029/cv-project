import React from "react";
import "../styles/GeneralInfo.css"
class GeneralInfo extends React.Component {
    constructor(props) {
        super();

        this.state = {info1: '', info2: '', info3: '', showCV: false};
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
                            this.setState({info1: e.target.value});
                        }}
                        placeholder="name"
                        value={this.state.info1}
                        />
                        <input onChange={(e) => {
                            this.setState({info2: e.target.value});
                        }}
                        placeholder="email"
                        type="email"
                        value={this.state.info2}
                        />
                        <input onChange={(e) => {
                            this.setState({info3: e.target.value});
                        }}
                        placeholder="phone number"
                        type="number"
                        value={this.state.info3}
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
                    {this.state.info1}
                </div>
                <div>
                    Email: {this.state.info2}
                </div>
                <div>
                    Phone Number: {this.state.info3}
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

export default GeneralInfo;