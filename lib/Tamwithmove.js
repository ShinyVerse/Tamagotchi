var healthBar = document.getElementById('healthBar');
var sleepBar = document.getElementById('sleepBar');
var feed = document.getElementById('feed');
var mouth = document.getElementById('mouth');
var eyes = document.getElementsByClassName('eye');
var animal = document.getElementById('pet');

feed.addEventListener("click", eat);

var Pet = (function() {

  return function() {

    var hunger = 100;
    var energy = 100;
    var isAwake = true;
    var hungerInterval;
    var energyInterval;
    var sleepingInterval;

    function feedPet(num) {
      var newHunger = hunger + num;
      console.log(newHunger);
      if ( newHunger > 10 ) {
        hunger = 100;
        healthBar.style.width = hunger + "px";
      } else {
        hunger = newHunger;
        healthBar.style.width = hunger + "px";
      }
      return hunger;
    }

    function kill() {
      animal.style.marginLeft = "40%";
      animal.classList.remove('alive');
      mouth.classList.remove('smile');
      var i;
      for (i = 0; i < eyes.length; i+=1){
        eyes[i].classList.remove('motion');
        eyes[i].classList.add('dead');
      }
    }

    function hasStarved(){
      return hunger === 0;
    }

    function increaseHunger(){
      if (hasStarved()){
        clearInterval(hungerInterval);
        kill()
        console.log("Your pet has died X_X");
      } else {
        hunger -= 50;
        healthBar.style.width = hunger + "px";
        console.log(hunger);
        return hunger;
      }
    }

    function reduceEnergy() {
      energy -= 1;
      sleepBar.style.width = energy + "px";
      console.log("Pet's energy: " + energy)
      return energy;
    }

    function restPet(){
      if (isAwake){
        clearInterval(energyInterval);
        isAwake = false;
      }
      energy += 1;
    }

    function wakePet(){
      clearInterval(sleepingInterval);
      energyInterval = setInterval(reduceEnergy, 3000);
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

         restPet: function() {
           sleepingInterval = setInterval(restPet, 2000);
           return sleepingInterval;
         },

        feedPet: function(num) {
          feedPet(num);
        },

        wakePet: function() {
          wakePet();
        }
      }
    }

  })()

var pet = Pet();
pet.imitateHunger();
pet.imitateEnergy();


// var barInt = setInterval(decHealth, 3000)

// var health = 100;


// function decHealth() {
//   health -= 10;
//   bar.style.width = health + "px";
//   console.log(health);
// }

// animation: eat 0.4s 4;

function eat() {
  pet.feedPet(15);
  mouth.classList.add('move-mouth');
  setTimeout(function() {
    mouth.classList.remove('move-mouth');
  }, 4000);
}