function Configuration(Id) {
  this.url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${Id}/scores`;
  this.addScore = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  this.getScore = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
}

export default Configuration;