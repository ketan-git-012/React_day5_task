
const globalFunctions = {
    getRandomNumber(maxNUmber){
        return Math.floor(Math.random() * maxNUmber);
    },

    getNextRoundRobin(total, current){
        return current < total ? current++ : 0;
    }
}

export default globalFunctions;