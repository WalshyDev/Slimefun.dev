import React from 'react';

export default class NavLink extends React.Component {

  render() {
    return <li>
        <a className='white-text btn btn-flat waves-effect' href={this.props.link}>
          <i className='material-icons left'>{this.props.icon}</i>{this.props.text}
        </a>
      </li>
  }
}