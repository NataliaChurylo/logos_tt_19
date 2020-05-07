let myMath = {};
myMath.a = 5;
myMath.b = 2;
myMath.sum = function(){
    console.log(this.a + this.b)
}

myMath.multiplication = function(){
    console.log(this.a * this.b)
}

myMath.division = function(){
    console.log(this.a / this.b)
}

myMath.subtraction = function(){
    console.log(this.a - this.b)
}

myMath.sum();
myMath.multiplication();
myMath.division();
myMath.subtraction();