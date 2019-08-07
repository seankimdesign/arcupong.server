const { processMatch } = require('./rankings')

const aaron = {
  name: 'Aaron',
  mu: 25,
  sigma: 8.3333,
  matchesPlayed: 27
}
const bill = {
  name: 'Bill',
  mu: 27,
  sigma: 3,
  matchesPlayed: 20
}
const chad = {
  name: 'Chad',
  mu: 16,
  sigma: 3.6,
  matchesPlayed: 37
}
const dale = {
  name: 'Dale',
  mu: 19,
  sigma: 5.5,
  matchesPlayed: 22
}

const team1 = [aaron, bill]
const team2 = [chad, dale]

const match = [team1, team2]

const result = processMatch(match)
console.log(result)
console.log('From best to worst:', result.sort((a, b) => b.dominance - a.dominance).map(p => p.name))
