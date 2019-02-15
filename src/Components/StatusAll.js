import React, { Component } from 'react';
import StatusList from './StatusList';

export default class StatusAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newStatusText: '',
            statuses: [
                "first line of text",
                "second line of text",
                "third line of text",
                "fourth line of text"
            ]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({newStatusText: event.target.value});
    }
    handleSubmit(event) {
        //stop auto refresh on page
        event.preventDefault();
        let newStatuses = [this.state.newStatusText, ...this.state.statuses]
        this.setState({
            newStatusText: 'new text',
            statuses: newStatuses
        })
    }

    render() {
        return (
            <div>
                <div className="status">
                    <h1>Enter New Status </h1>
                    <form onSubmit={this.handleSubmit}>
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



