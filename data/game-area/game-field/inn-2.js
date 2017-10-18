'use strict';

const drunkenBeggar = require('../../characters/npc/drunken-beggar');

module.exports = {
  desc: 'A kocsma ezen részében csak egy láthatóan ' + '\x1b[32m' + 'részeg koldus' + '\x1b[0m' +
  ' gubbaszt az egyik asztalnál.',
  deadNpcDesc: 'A kocsma ezen résza üres, az asztalok között csak a legyek halk zümmögését hallod.',
  shortDesc: 'a távolban egy ház körvonalait látod. Egy kocsma.',
  npc: drunkenBeggar,
  item: null,
  accessible: true
};
