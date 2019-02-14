import React, { Component } from 'react';
import Status from "./Status";


export default class StatusList extends Component {
    render() {
        return (
           this.props.statuses.map(statusText => {
               return <Status mytext={statusText} />
           })
        );
    }
}