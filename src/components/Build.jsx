import React from 'react';

import Request from '../utils/Request';

export default class Build extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      data: {},
      error: null
    }
  }

  componentWillMount() {
    Request.getBuilds(this, this.props.user, this.props.project, this.props.branch || 'master');
  }

  render() {
    if (this.state.error) {
      return (
        <div id='build'>
          <p className='error'>{ this.state.error }</p>
        </div>
      );
    }

    if (!this.state.loaded) {
      return (
        <div id='build'>
          <p>Loading...</p>
        </div>
      );
    }

    const latestBuildId = this.state.data.last_successful;
    const data = this.state.data[latestBuildId];

    const link = `https://thebusybiscuit.github.io/builds/${this.props.user}/${this.props.project}/${this.props.branch || 'master'}`
      + `/${this.props.project}-${data.id}.jar`

    return (
      <a href={link}>
        <div className='build'>
          <h2>{this.props.branch === 'stable' ? 'Stable' : 'Development (recommended)'}</h2>
          <h3>Click to download { this.props.repo.options.prefix } - { data.id }</h3>

          <span>Built: { data.date } UTC</span>
        </div>
      </a>
    )
  }
}