import Configuration from './apiLink.js';

export default class {
  constructor() {
    this.Id = 'WhskjhL78hsw';
    this.Configuration = new Configuration(this.Id);
  }

  async addScore({ user, score }) {
    this.Configuration.addScore.body = JSON.stringify({ user, score });
    const data = await fetch(this.Configuration.url, this.Configuration.addScore);
    return data.json();
  }

  async getScore() {
    const data = await fetch(this.Configuration.url, this.Configuration.getScore);
    return data.json();
  }
}
