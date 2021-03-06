'use strict';

const gameArea = require('../../../models/game-area/game-field/index');
const position = require('../../../models/game-area/starter-position');
const player = require('../../../models/characters/player');
const random = require('./random/random');

module.exports = function (npc, matrix) {
  let n = 1;
  let targetNpc = gameArea[matrix[position[1]][position[0]]].npc;
  if (npc === undefined || npc !== targetNpc.name) {
    console.log('Kit?');
  }
  if (targetNpc !== null && targetNpc.hp < 1) {
    console.log('A(z) ' + targetNpc.name + ' halott, nincs kivel harcolnod.');
  }
  if (targetNpc !== null && targetNpc.hp > 0) {
    if (gameArea[matrix[position[1]][position[0]]].npc.name === npc) {
      while (targetNpc.hp > 0 && player.hp > 0) {
        let playerRandomRoll = random(1, 6);
        let npcRandomRoll = random(1, 6);
        console.log(n + '. kör');
        n++;

        targetNpc.hp -= player.str + playerRandomRoll;
        console.log('Megtámadtad a ' + targetNpc.name + '-t ' + (player.str + playerRandomRoll) + ' sebzéssel');
        player.hp -= targetNpc.str + npcRandomRoll;
        console.log('Megtámadott a ' + targetNpc.name + ' ' + (targetNpc.str + npcRandomRoll) + ' sebzéssel');
        console.log('--------------------------------------');
      }
      console.log('Jelenlegi életerőd ' + player.hp + ' || ellenfeled hátramaradó életereje ' + targetNpc.hp);
    }
    if (targetNpc.items !== null && targetNpc.hp <= 0) {
      console.log('A(z) ' + targetNpc.name + ' meghalt. Elejtette a(z) ' + '\x1b[33m' + targetNpc.items.name + '\x1b[0m' + '-t');
      console.log('--------------------------------------');
    }
  }
};
