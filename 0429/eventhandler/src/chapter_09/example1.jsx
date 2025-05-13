import React from "react";

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn,
        }));
    } render() {
        return (
            <button
                onClick={this.handleClick}
                disabled={this.state.isConfirmed}
            >
                {this.state.isToggleOn ? "켜짐" : "꺼짐"}
            </button>
        )
    }
}
class MyButton extends React.Component {
    handleClick = () => {
        console.log('this is :', this);
    }
    render() {
        return (
            <button onCLick={this.handle.Click}>
                클릭
            </button>
        );
    }
}
class MyButton extends React.Component {
    handleClick() {
        console.log('this is :', this);
    }
    render() {
        return (
            <button onCLick={() => this.handle.Click()}>
                클릭
            </button>
        );
    }
}


export default Toggle;