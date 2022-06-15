//Createing a class for adding inputs
require('./style.css')
class BoardList {
  constructor(name, score){
      this.name = name;
      this.score = score;
    }
}

class DomDisplay{
  static displayPerson(){
    const player = [];
    const players = player;

    players.forEach((person)=>{
      DomDisplay.addPerson(person);
    });
  }
  static addPerson(person){
    const list = document.getElementById('playerList');
    //create html elements for table
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${person.name}</td>
    <td${person.score}</td>
    `;
    list.appendChild(row);
  }
}

const username = document.getElementById('name');
const scored = document.getElementById('num');
const btn = document.getElementById('btn');
const list = document.getElementById('list');

btn.addEventListener('click', ()=>{
    
    list.innerHTML = username.value + num.value;
});

//event
document.addEventListener('contentLoad', DomDisplay.displayPerson());