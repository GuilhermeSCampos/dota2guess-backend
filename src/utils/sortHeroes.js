const fs = require('fs')

const { getGeneratedHeroes, getHeroes } = require('../utils/parseFiles')
const {  setQuoteHeroes, setSkillHeroes } = require('./setStatus')
const { sortQuoteAndAudio, sortSkill } = require('./helpers')


const sortHeroes = () => {
  const heroes = getHeroes()
  let randomNumber = Math.floor(Math.random() * 124);
  let newHero = heroes[randomNumber]
  return newHero

}

const sortQuoteHeroes = () => {
  const prohibitedHeroes = ["Marci", "Primal Beast", "Io", "Phoenix"]
  const generatedHeroes = getGeneratedHeroes();
  const generatedHeroesQuote = generatedHeroes.quoteGuessHeroes;
  const heroes = getHeroes();
  let randomNumber = Math.floor(Math.random() * 124);
  let newHero = heroes[randomNumber];
  while (generatedHeroesQuote.includes(newHero.name) || prohibitedHeroes.includes(newHero.name)) {
    randomNumber = Math.floor(Math.random() * 124);
    newHero = heroes[randomNumber]
  }
  if (generatedHeroesQuote.length === 15) {
    generatedHeroesQuote.pop();
  }

  generatedHeroesQuote.unshift(newHero.name)


  const lastHeroName = generatedHeroesQuote.length > 1 ? generatedHeroesQuote[1] : "Ainda não há"

  const newData = {
    ...generatedHeroes,
    quoteGuessHeroes: generatedHeroesQuote
  }

  fs.writeFileSync(__dirname + "/../database/generatedHeroes.json", JSON.stringify(newData));
  sortQuoteAndAudio(newHero.name)

  return setQuoteHeroes(newHero.name, lastHeroName)
}

const sortSkillHeroes = () => {
  const generatedHeroes = getGeneratedHeroes();
  const generatedHeroesSkill = generatedHeroes.skillGuessHeroes;
  const heroes = getHeroes();
  let randomNumber = Math.floor(Math.random() * 124);
  let newHero = heroes[randomNumber];
  while (generatedHeroesSkill.includes(newHero.name)) {
    randomNumber = Math.floor(Math.random() * 124);
    newHero = heroes[randomNumber]
  }
  if (generatedHeroesSkill.length === 15) {
    generatedHeroesSkill.pop();
  }

  generatedHeroesSkill.unshift(newHero.name)
  const lastHeroName = generatedHeroesSkill.length > 1 ? generatedHeroesSkill[1] : "Ainda não há"

  const newData = {
    ...generatedHeroes,
    skillGuessHeroes: generatedHeroesSkill
  }

  fs.writeFileSync(__dirname + "/../database/generatedHeroes.json", JSON.stringify(newData));

  sortSkill(newHero.name)
  return setSkillHeroes(newHero.name, lastHeroName)
}

module.exports = {
  sortHeroes,
  sortQuoteHeroes,
  sortSkillHeroes
}




