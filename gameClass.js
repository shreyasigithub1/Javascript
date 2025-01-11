//Do not alter the starter code
function main(){

    //Create Character constructor function
    
    //Create Warrior ,Mage, Enemy and Archer constructor function inheriting Character
    
    //Create constructor function for Hero inheriting Hero and Mage

    function Character(health,strength,agility) {
        this.health = health;
        this.strength = strength;
        this.agility = agility;
      }

      function Warrior(health,strength,agility,spellType) {
        Character.call(this, health,strength,agility); 
        this.spellType = spellType;
        
      }
      Warrior.prototype = Object.create(Character.prototype);
      Warrior.prototype.constructor = Warrior;

      function Mage(health,strength,agility,weaponType) {
        Character.call(this, health,strength,agility); 
        this.weaponType = weaponType;
        
      }
      Mage.prototype = Object.create(Character.prototype);
      Mage.prototype.constructor = Mage;


      function Archer(health,strength,agility,arrowType) {
        Character.call(this, health,strength,agility); 
        this.arrowType = arrowType;
        
      }
      Archer.prototype = Object.create(Character.prototype);
      Archer.prototype.constructor = Archer;
  

      function Enemy(health,strength,agility,enemyType) {
        Character.call(this, health,strength,agility); 
        this.enemyType = enemyType;
        
      }

      Enemy.prototype = Object.create(Character.prototype);
      Enemy.prototype.constructor = Enemy;

      function Hero (health,strength,agility,spellType,weaponType,specialAbility) {
        
        Warrior.call(this, health,strength,agility,spellType);
        Mage.call(this, health,strength,agility,weaponType);
        this.specialAbility=specialAbility;
    }

    Hero.prototype = Object.create(Warrior.prototype);
    Object.assign(Hero.prototype, Mage.prototype);
    Hero.prototype.constructor = Hero;

    let warrior1 = new Warrior(100, 50, 30, "sword");
    let mage1 = new Mage(80, 20, 50, "fireball");
    let archer1 = new Archer(90, 40, 40, "poison");
    let hero1 = new Hero(120, 60, 40, "axe", "ice", "double damage");
    let enemy1 = new Enemy(200, 80, 20, "goblin");
    
    console.log(warrior1);
    console.log(mage1);
    console.log(archer1);
    console.log(hero1);
    console.log(enemy1);
    
    return {Character,Hero,Warrior,Mage,Archer,Enemy};
    }

    main();