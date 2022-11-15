import { Component } from "react";

type CounterProps = {
    message: string
}

type CounterState = {
    count: number
}

export class ClassCounter extends Component<CounterProps, CounterState> {
    // Just state <{}, CounterState>
    // Just props <CounterProps>
    state = {
        count: 0,
    }

    handleClick = () => {
        this.setState((prevState) => ({ count: prevState.count + 1}))
    }
    render() {
        return (
            <div>
                <button></button>
                {this.props.message} {this.state.count}
            </div>
        )
    }
}