var Pet = require('../../lib/Tamagotchi').Pet;

describe('Tamagotchi', function() {

  beforeEach(function() {
    pet = Pet();
    jasmine.clock().uninstall();
    jasmine.clock().install();
  })

  describe('initial #stats', function() {
    it('should be able to show up to date hunger, awake and energy', function() {
      expect(pet.stats().hunger).toEqual(10);
      expect(pet.stats().energy).toEqual(10);
      expect(pet.stats().isAwake).toEqual(true);
    });
  });

  describe('#imitateHunger', function() {
    it('should reduce hunger down after 2 seconds', function() {
      pet.imitateHunger();
      jasmine.clock().tick(2002);
      expect(pet.stats().hunger).toEqual(9);
    });
  });

  describe('#imitateEnergy', function() {
    it('should reduce energy down after 3 seconds', function() {
      pet.imitateEnergy();
      jasmine.clock().tick(3002);
      expect(pet.stats().energy).toEqual(9);
    });
  });

  describe('#feedPet', function() {
    it('should allow for pet to be fed', function() {
      pet.imitateHunger();
      jasmine.clock().tick(6002);
      pet.feedPet(2)
      expect(pet.stats().hunger).toEqual(9);
    });

    it('should not go below 0', function() {
      pet.imitateHunger();
      jasmine.clock().tick(31002);
      expect(pet.stats().hunger).toEqual(0);
    });
  });
  describe('#restPet', function() {
    it('should allow pet to go to sleep', function() {
      pet.imitateEnergy();
      jasmine.clock().tick(9002);
      pet.restPet();
      jasmine.clock().tick(2002);
      expect(pet.stats().energy).toEqual(8);
    });
  });
  describe('#wakePet', function() {
    it('should allow pet to be woken up', function() {
      pet.imitateEnergy();
      jasmine.clock().tick(9002);
      pet.restPet();
      jasmine.clock().tick(2002);
      pet.wakePet();
      expect(pet.stats().energy).toEqual(8);
    })
  })
});
