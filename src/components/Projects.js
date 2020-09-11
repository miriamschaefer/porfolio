import React, { Component } from 'react';

class Projects extends Component {
  constructor(props) {
    super(props);
    // 1. bind your functions in the constructor.
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
    this.state = {
      hover: false,
    };
  }

  mouseOver = () => {
    this.setState({ hover: true });
  };
  mouseOut() {
    this.setState({ hover: false });
  }

  render() {
    return (
      <div>
        <div className={`container ${this.state.hover === true ? 'over' : ''}`}>
          <p onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
            Proyecto 1
          </p>
        </div>
      </div>
    );
  }
}

export default Projects;
