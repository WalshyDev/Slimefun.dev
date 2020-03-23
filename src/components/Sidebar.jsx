import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

import NavLink from './NavLink.jsx';

class Sidebar extends React.Component {

  componentDidMount() {
    M.Sidenav.init(document.querySelector('.sidenav'), {
      edge: 'left',
      inDuration: 250
    });
  }

  render() {
    return (
      <div className='hide-on-large-only white-text button-collapse sidenav-button sidenav-trigger clickable'>
        <ul id='slide-out' className='sidenav'>
          <NavLink link='https://discord.gg/fsD4Bkh' icon='chat_bubble' text='Discord' />
          <NavLink link='https://github.com/TheBusyBiscuit/Slimefun4' icon='code' text='GitHub' />
          <NavLink link='https://thebusybiscuit.github.io/Slimefun4/' icon='help' text='JavaDocs' />
        </ul>
      </div>
    );
  }
}

export default Sidebar;