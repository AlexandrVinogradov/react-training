import React, { Component } from "react";
import { connect } from "react-redux";

import ListItem from "./ListItem";

class List extends Component {

  render() {
    const { title, items } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <ul style={{ height: 300, overflowY: 'scroll' }}>
          {items.map((item, index) => (
            <ListItem key={index} name={item.name} index={index} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.list.items
  };
};

export default connect(mapStateToProps)(List);

=========================================================================================================

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as listActions from "../actions/list";

class ListAdd extends Component {
  handleOnClick = event => {
    this.addItem(this.refs.input.value);
  };

  handleOnPress = event => {
    if (event.key === "Enter") {
      this.addItem(this.refs.input.value);
    }
  };

  addItem = name => {
    if (name.length > 0) {
      this.props.actions.add(name);
      this.refs.input.value = "";
      this.refs.input.focus();
    }
  };

  render() {
    // creating variable: items
    const items = this.props.items;
    return (
      <div>
        <div>
          <input ref={"input"} onKeyPress={this.handleOnPress} />
          {/* transfer callback to handler*/}
          <button onClick={this.handleOnClick}>+</button>
        </div>
        {/* outputing last task */}
        <p>
          Последняя добавленная:{" "}
          {this.props.last || items[items.length - 1].name}{" "}
        </p>
      </div>
    );
  }
}

// add access to necessary data
const mapStateToProps = state => {
  return {
    lastItem: state.list.last,
    items: state.list.items
  };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(listActions, dispatch) };
};

// transfer mapStateToProps to ListAdd
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListAdd);

=========================================================================================================

import React, { Component } from "react";
import { connect } from "react-redux";

class ListCounter extends Component {
  render() {
    return <h3>Задач добавлено: {this.props.counter}</h3>;
  }
}

const mapStateToProps = state => {
  return {
    counter: state.list.items.length
  };
};

export default connect(mapStateToProps)(ListCounter);

=========================================================================================================

import React, { PureComponent } from "react"; //extends from PureComponent
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as listActions from "../actions/list";

const styles = {
  default: {
    fontFamily: "Helvetica",
    fontSize: 18,
    color: "#333333",
    cursor: "pointer"
  }
};

//extends from PureComponent to avoid unnecessary rerenders
class ListItem extends PureComponent {
  handleOnClick = event => {
    this.props.actions.select(this.props.index);
  };

  render() {
    const { selected, index } = this.props;
    return (
      <li
        onClick={this.handleOnClick}
        style={{
          ...styles.default,
          color: selected.indexOf(index) !== -1 ? "steelblue" : "#333333"
        }}
      >
        {this.props.name}
      </li>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    selected: state.list.selected
  };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(listActions, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItem);

=========================================================================================================

const initialState = {
  items: [
    { name: "item 1" },
    { name: "item 2" },
    { name: "item 3" },
    { name: "item 4" },
    { name: "item 5" }
  ],
  selected: [],
  lastItem: ''  // added empty variable to state
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      console.log(state.items[state.items.length - 1]);
      return {
        ...state,
        items: state.items.concat({ name: action.name }),
        lastItem: action.name // adding value of lastItem to state
      };
    }
    case "SELECT": {
      return {
        ...state,
        selected: [action.index]
      };
    }
    default:
      return state;
  }
};

export default list;