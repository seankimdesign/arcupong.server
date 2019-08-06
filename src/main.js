const {postMatch, calcWinProbability} = require('./rankings')

const DEFAULT_SKILL = [25, 25/3]

const getNewPlayer = id => ({skill: DEFAULT_SKILL, id})
const remapPlayers = (source, incoming) => {
  const result = {...source}
  incoming.forEach(i => result[i.id] = i)
  return result
}

const playerNames = ['aaron', 'bill', 'chad', 'dale', 'eric', 'fred']
let players = {}
let results = []
playerNames.forEach(n => players[n] = getNewPlayer(n))

const logAll = () => Object.keys(players).map(n => console.log(players[n]))

results = postMatch([players.aaron, players.bill], [players.chad, players.dale])
players = remapPlayers(players, results)

results = postMatch([players.chad, players.dale], [players.aaron, players.bill])
players = remapPlayers(players, results)

results = postMatch([players.aaron, players.bill], [players.chad, players.dale])
players = remapPlayers(players, results)

results = postMatch([players.aaron, players.bill], [players.chad, players.dale])
players = remapPlayers(players, results)

results = postMatch([players.chad, players.dale], [players.aaron, players.bill])
players = remapPlayers(players, results)

results = postMatch([players.chad, players.eric], [players.dale, players.bill])
players = remapPlayers(players, results)

results = postMatch([players.chad, players.eric], [players.dale, players.bill])
players = remapPlayers(players, results)

results = postMatch([players.dale, players.bill], [players.chad, players.eric])
players = remapPlayers(players, results)

results = postMatch([players.dale, players.bill], [players.chad, players.aaron])
players = remapPlayers(players, results)

results = postMatch([players.dale, players.bill], [players.chad, players.eric])
players = remapPlayers(players, results)

results = postMatch([players.aaron, players.eric], [players.bill, players.chad])
players = remapPlayers(players, results)

results = postMatch([players.aaron, players.eric], [players.bill, players.chad])
players = remapPlayers(players, results)

results = postMatch([players.chad, players.eric], [players.dale, players.aaron])
players = remapPlayers(players, results)

results = postMatch([players.aaron, players.bill], [players.chad, players.eric])
players = remapPlayers(players, results)

results = postMatch([players.aaron, players.bill], [players.chad, players.eric])
players = remapPlayers(players, results)

results = postMatch([players.dale, players.bill], [players.aaron, players.eric])
players = remapPlayers(players, results)

results = postMatch( [players.aaron, players.eric], [players.dale, players.bill])
players = remapPlayers(players, results)

results = postMatch( [players.aaron, players.eric], [players.dale, players.chad])
players = remapPlayers(players, results)

results = postMatch( [players.aaron, players.chad], [players.dale, players.bill])
players = remapPlayers(players, results)

results = postMatch( [players.fred, players.aaron], [players.eric, players.dale])
players = remapPlayers(players, results)

results = postMatch( [players.chad], [players.dale])
players = remapPlayers(players, results)

results = postMatch( [players.chad], [players.dale])
players = remapPlayers(players, results)

results = postMatch( [players.eric], [players.fred])
players = remapPlayers(players, results)

logAll()

console.log(calcWinProbability(players.aaron, players.dale))
console.log(calcWinProbability(players.bill, players.eric))
