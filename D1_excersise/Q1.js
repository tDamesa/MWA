function Musician(name){
this.name=name;
}
let Violinist= new Musician("Ababu");
let Pianist= new Musician("Davis");

Musician.prototype.play= function(piece){
    return `${this.name} is now playing ${piece};`
}
Violinist.play("The Four Seasons");
Pianist.play("Ride of the Valkyries");