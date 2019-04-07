// Soldier

function Soldier(health,strength){
  this.health = health
  this.strength = strength
  this.attack = () =>{
   // console.log(`Soldado tiene Salud: ${this.health} /  Fuerza: ${this.strength} y tiene  Ataque:${this.strength}`)
    return this.strength
  }
   this.receiveDamage = (damage) =>{
    this.health -= damage
     //console.log(`Al Soldado le queda ${this.health} vida`)
   }
}
const soldier1 = new Soldier(4,2)

// Viking
function Viking(name, health, strength){
  Soldier.call(this,health,strength)
  this.name= name
  this.receiveDamage = (damage) =>{
    this.health -=damage
     console.log(`Al Vikingo le queda ${this.health} vida`)
     if(this.health>0){
       console.log(`${this.name} has received ${damage} points of damage` )
      return `${this.name} has received ${damage} points of damage`  
     }
     else{
      return `${this.name} has died in act of combat`
     }
   }
   this.battleCry = () =>{
    return "Odin Owns You All!"
     //console.log(`Al Soldado le queda ${this.health} vida`)
   }

}
Viking.prototype = Object.create(Soldier.prototype)
const viking1 = new Viking("Ragnar", 8, 2)


// Saxon
let Saxon = function(health,strenght){
  Soldier.call(this,health,strenght)
  this.receiveDamage = (damage) => {
    this.health =this.health-damage
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    }else{
      return `A Saxon has died in combat`
    }
  }
 }
 
 Saxon.prototype = Object.create(Soldier.prototype)

// War
function War (){
  this.vikingArmy =[]
  this.saxonArmy =[]
  this.addViking = (viking) =>{
    this.vikingArmy.push(viking)
  }
  this.addSaxon = (saxon) =>{
    this.saxonArmy.push(saxon)
  }
  this.vikingAttack = () =>{
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length)
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
    const viking = this.vikingArmy[randomViking]
    const saxon = this.saxonArmy[randomSaxon]
    const attackResult = saxon.receiveDamage(viking.attack())
    this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0)
    return attackResult
  }
  this.saxonAttack = () =>{
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length)
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
    const viking = this.vikingArmy[randomViking]
    const saxon = this.saxonArmy[randomSaxon]
    const attackResult = viking.receiveDamage(saxon.attack())
    this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0)
    return attackResult
  }

  this.showStatus = () =>{
    if(this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!"
    }
    else if(this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survive another day..."
    }
    else{
      return "Vikings and Saxons are still in the thick of battle."
    }
  }

}

