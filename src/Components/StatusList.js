import React, { Component } from 'react';
import Status from "./Status";


export default class StatusList extends Component {
    constructor () {
        super();
        this.state = {
            statuses: [
                "first line of text",
                "second line of text",
                "third line of text",
                "fourth line of text"
            ]
        }
    }

    render() {
        return (
           this.state.statuses.map(statusText => {
               return <Status mytext={statusText} />
           })
        );
    }
}