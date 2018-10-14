var Pet = (function() {

  return function() {
    var hunger = 10;
    var energy = 10;
    var isAwake = true;
    var hungerInterval;
    var energyInterval;

    function feedPet(num) {
      var newHunger = hunger + num;
      console.log(newHunger);
      if ( newHunger > 10 ) {
        hunger = 10;
      } else {
        hunger = newHunger;
      }
      return hunger;
    }

    function hasStarved(){
      return hunger === 0;
    }

    function increaseHunger(){
      if (hasStarved()){
        clearInterval(hungerInterval);
        console.log("Your pet has died X_X");
      } else {
        hunger -= 1;
        console.log(hunger);
        return hunger;
      }
    }

    function reduceEnergy() {
      energy -= 1;
      console.log("Pet's energy: " + energy)
      return energy;
    }

    return {
      stats: function() {
        return {
          hunger: hunger,
          energy: energy,
          isAwake: isAwake
        }
      },

       imitateHunger: function(){
          hungerInterval = setInterval(increaseHunger, 2000)
          return hungerInterval
        },

        imitateEnergy: function(){
           energyInterval = setInterval(reduceEnergy, 3000)
           return energyInterval;
         },

        feedPet: function(num) {
          feedPet(num);
        }

      }
    }

  })()

exports.Pet = Pet;
