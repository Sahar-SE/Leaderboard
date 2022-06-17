const list = document.getElementById('playerScore');
export default (leaderBoard) => {
  list.innerHTML = leaderBoard.map(({ user, score }) => `<li class="score">
        <p>${user}: ${+score > 0 ? +score : 0}</p>
    </li>`).join(' ');
};