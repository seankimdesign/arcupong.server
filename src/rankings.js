const trueskill = require('trueskill')

const copyPlayer = ({skill, id}) => ({skill: skill.slice(), id})
const addRank = rank => o => ({...o, rank})
const removeRank = ({rank, ...o}) => ({...o})

module.exports.postMatch = (winners, losers) => {
  const allArrs = Array.isArray(winners) && Array.isArray(losers)
  if (!allArrs){
    console.error('Invalid input provided for postMatch()')
    return
  }
  const winnersCopy = winners.map(copyPlayer).map(addRank(1))
  const losersCopy = losers.map(copyPlayer).map(addRank(2))
  const allPlayers = [...winnersCopy, ...losersCopy]
  trueskill.AdjustPlayers(allPlayers)
  return allPlayers.map(removeRank)
}

module.exports.calcWinProbability = (player1, player2) => {
  const validPlayer1 = player1 && player1.hasOwnProperty('skill') && Array.isArray(player1.skill)
  const validPlayer2 = player2 && player2.hasOwnProperty('skill') && Array.isArray(player2.skill)
  if (!validPlayer1 || !validPlayer2){
    console.error('Invalid input provided for calcWinProbability()')
    return
  }
  return trueskill.ChanceOfWinning(player1.skill, player2.skill)
}
