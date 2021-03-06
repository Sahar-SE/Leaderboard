import CallApi from './scores.js';
import ui from './dom.js';

const addScoreForm = document.querySelector('#add-score-form');
const refereshButton = document.getElementById('referesh-button');

const submitScore = (event) => {
  event.preventDefault();
  const api = new CallApi();
  const formInputs = Object.fromEntries(new FormData(addScoreForm).entries());
  api.addScore(formInputs).then((data) => data)
    .catch((err) => err)
    .finally(() => {
      addScoreForm.reset();
    });
};

const getScores = () => {
  const api = new CallApi();
  const loadingDiv = document.getElementById('loading-div');
  loadingDiv.style = 'display:block;';
  api.getScore()
    .then((data) => ui(data.result))
    .catch((err) => err)
    .finally(() => {
      loadingDiv.style = 'display:none;';
    });
};

export default () => {
  addScoreForm.addEventListener('submit', submitScore);

  refereshButton.addEventListener('click', getScores);
};