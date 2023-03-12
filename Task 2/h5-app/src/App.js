import NavBar from "./components/navBar";

import React, { Component } from "react";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    totalCount: 0,
  };

  handleDelete = (counterId) => {
    console.log("Delete Event handler called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handlerReset = () => {
    console.log("Reset Event handler called");
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
    this.state.totalCount = 0;
  };

  handleIncrement = (counter) => {
    console.log("Increment Event handler called", counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    this.state.totalCount++;
  };

  handleDecrement = (counter) => {
    console.log("Decrement Event handler called", counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value != 0) {
      counters[index].value--;
    }

    this.setState({ counters });
    if (this.state.totalCount != 0) {
      this.state.totalCount--;
    }
  };
  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.totalCount} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handlerReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
