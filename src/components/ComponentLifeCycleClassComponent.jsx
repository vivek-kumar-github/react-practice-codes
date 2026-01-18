import React, { Component, useEffect, useState } from 'react';

export default class ComponentLifeCycleClassComponent extends Component {
    constructor(props) {
        super(props);
        alert("1. Constructor: Initializing State");
        this.state = {
            count: 0,
            favoriteColor: "red",
            snapshotMsg: ""
        };
    }

    static getDerivedStateFromProps(props, state) {
        alert("2. getDerivedStateFromProps: Syncing props to state");
        return null; // Return null if no change to state is needed
    }

    componentDidMount() {
        alert("4. componentDidMount: Component is in DOM. Good for API calls.");
        // Example: Timer triggering an update after 2 seconds
        this.timerId = setTimeout(() => {
            this.setState({ favoriteColor: "yellow" });
        }, 2000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        alert("5. shouldComponentUpdate: Deciding whether to re-render");
        return true; // Return false to prevent rendering
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        alert("6. getSnapshotBeforeUpdate: Capturing data before DOM update");
        return `Before the update, the color was: ${prevState.favoriteColor}`;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        alert("7. componentDidUpdate: DOM is updated");
        if (snapshot && this.state.snapshotMsg !== snapshot) {
            this.setState({ snapshotMsg: snapshot });
        }
    }

    componentWillUnmount() {
        alert("8. componentWillUnmount: Cleaning up (ClearTimeout)");
        clearTimeout(this.timerId);
    }

    render() {
        alert("3. render: Outputting HTML");
        return (
            <div className="card p-3 m-2 shadow-sm">
                <h3>Class Component Lifecycle</h3>
                <p>Favorite Color: <b style={{ color: this.state.favoriteColor }}>{this.state.favoriteColor}</b></p>
                <p className="text-muted">{this.state.snapshotMsg}</p>
                <button className="btn btn-primary" onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Update Count ({this.state.count})
                </button>
            </div>
        );
    }
}