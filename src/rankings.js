const { rate, Rating, expose } = require('ts-trueskill')

const fixedExpose = rating => {
  const mu = 25
  const sigma = 25 / 3
  const k = mu / sigma
  return rating.mu - (k * rating.sigma)
}

const getRatingObject = person => new Rating(person.mu, person.sigma)

const updateRatings = updated => (person, i) => ({...person, mu: updated[i].mu, sigma: updated[i].sigma})

const updateDominance = person => ({...person, dominance: fixedExpose(getRatingObject(person))})

const processMatch = ([winners, losers]) => {
  const winnersRating = winners.map(getRatingObject)
  const losersRating = losers.map(getRatingObject)
  const [winnersNewRating, losersNewRating] = rate([winnersRating, losersRating])
  const winnersUpdated = winners.map(updateRatings(winnersNewRating))
  const losersUpdated = losers.map(updateRatings(losersNewRating))
  return [...winnersUpdated, ...losersUpdated].map(updateDominance)
}

exports.processMatch = processMatch
