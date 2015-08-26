/**
 *  Hello.js
 *  Base react component for this example
 *  @author: Ben Gundersen
 */
'use strict';

var React = require('react');

var List        = require('./List.js');
var ColorButton = require('./ColorButton.js');



class GreatGrandChild extends React.Component {
  render() {
    return (
      <h1 style={{color: 'blue'}}>{ this.context.theCount }</h1>
    );
  }
}
GreatGrandChild.contextTypes = {
  theCount: React.PropTypes.number.isRequired
};


class GrandChild extends React.Component {
  render() {
    return (
      <GreatGrandChild />
    );
  }
}


class Child extends React.Component {
  render() {
    return (
      <GrandChild />
    );
  }
}


export default class Hello extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  getChildContext() {
    return {
      theCount: this.state.count
    }
  }

  updateCount(num) {
    this.setState({
      count: this.state.count + num
    });
  }

  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <ColorButton handleClick={ this.updateCount.bind(this, 1) }>+ More</ColorButton>
        <ColorButton handleClick={ this.updateCount.bind(this, -1)}>- Less</ColorButton>
        <Child />
        <List items={ this.state.count } />
      </div>
    );
  }

}
Hello.childContextTypes = {
  theCount: React.PropTypes.number.isRequired
};
