import axios from 'axios';

const buildsUrl = 'https://thebusybiscuit.github.io/builds';

export default class Request {

  static getRepos(component) {
    this.get(`${buildsUrl}/resources/repos.json`, component);
  }

  static getBuilds(component, user, project, branch = 'master') {
    this.get(`${buildsUrl}/${user}/${project}/${branch}/builds.json`, component);
  }

  static get(url, component) {
    axios.get(url, {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => {
      component.setState({
        loaded: true,
        data: res.data
      });
    })
    .catch(error => {
      component.setState({
        loaded: false,
        error
      });
    });
  }
}