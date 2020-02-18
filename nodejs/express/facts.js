export const randomFacts = [
    "I am tired",
    "I am learning Express",
    "Who am I ?",
    "Ready to go home",
    "Worked all day"
];


const getRandomFact = () => {
    return randomFacts[Math.floor(Math.random() * Math.floor(randomFacts.length))];
}
module.exports = { randomFacts, getRandomFact };