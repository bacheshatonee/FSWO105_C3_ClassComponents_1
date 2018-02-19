import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

let key = 0;

class TodoList extends Component {
  constructor(props){
    super(props);
  }
  render() {
     this.listItems = this.props.items.map(lineItem => <li key={key++}>{lineItem}</li>);
    return(
      <ul>
        <li key={key++}>Title: {this.props.title}</li>
        <ul>
          {this.listItems}
        </ul>
      </ul>
    );
  }
}

TodoList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

render(<TodoList title="Student todo" items={['Sign up for code review', 'Finish TodoList component', 'Get lots of sleep']}/>, document.getElementById('root'))
