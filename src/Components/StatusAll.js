import React, { Component } from 'react';
import StatusList from './StatusList';

export default class StatusAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newStatusText: 'new text',
            statuses: [
                "first line of text",
                "second line of text",
                "third line of text",
                "fourth line of text"
            ]
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({newStatusText: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="status">
                    <h1>Enter New Status </h1>
                    <form>
                        <input type='text' value={this.state.newStatusText}
                               onChange={this.handleChange}placeholder='text here'/>
                        <button type='submit'>Add Status</button>
                    </form>
                </div>
                <div className='status'>
                    <h1>All Statuses </h1>
                    <StatusList statuses={this.state.statuses}/>
                </div>
            </div>
        )
    }
}



