import React from 'react';

import Request from '../utils/Request';

import Build from './Build.jsx';
import NavLink from './NavLink.jsx';
import Sidebar from './Sidebar.jsx';

export default class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      data: {},
      error: null
    }
  }

  componentWillMount() {
    Request.getRepos(this);
  }

  render() {
    const { loaded, data, error } = this.state;

    if (error) {
      return <h1>Failed to load: { error }</h1>
    }

    if (!loaded) {
      return <h2>Loading...</h2>
    }

    return (
      <div id='app'>
        <Sidebar />
        <nav className='navbar-fixed'>
          <h1>Slimefun4</h1>

          <ul className='right hide-on-med-and-down'>
            <NavLink link='https://discord.gg/fsD4Bkh' icon='chat_bubble' text='Discord' />
            <NavLink link='https://github.com/TheBusyBiscuit/Slimefun4' icon='code' text='GitHub' />
            <NavLink link='https://thebusybiscuit.github.io/Slimefun4/' icon='help' text='JavaDocs' />
          </ul>
          <a href='/' data-target='slide-out' className='sidenav-trigger'><i className='material-icons'>menu</i></a>
        </nav>

        <div id='latest-builds'>
          <Build user='TheBusyBiscuit' project='Slimefun4' repo={ data['TheBusyBiscuit/Slimefun4:master'] } />
          <Build user='TheBusyBiscuit' project='Slimefun4' branch='stable' repo={ data['TheBusyBiscuit/Slimefun4:stable'] } />
        </div>
      </div>
    )
  }
}