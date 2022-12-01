const players = {
    1: {
        name: 'John',
        totalCaloriesCarried : 6000

    },

    2: {

        name: 'Jane',
        totalCaloriesCarried : 4000

    },

    3: {

        name: 'Jack',
        totalCaloriesCarried : 11000

    },

    4: {

        name: 'Jill',
        totalCaloriesCarried : 24000
        
    },

    5: {

        name: 'Jenny',
        totalCaloriesCarried : 10000

    }



}

// mapear quem tem mais calorias

const playerWithMoreCalories = Object.values(players).reduce((acc, player) => {

    if(acc.totalCaloriesCarried > player.totalCaloriesCarried) return acc

    return player

}) 

console.log(playerWithMoreCalories)

  




