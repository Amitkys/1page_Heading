let cal = {
    a : 1,
    b : 10,
    sum: function(){
        console.log(this.a + this.b);
    }
};


function knowSum(){
    return cal = {
        a : 1,
        b : 10,
        c : 20,
        sum: function(){
            console.log(this.a + this.b+ this.c);
        }
    };
}

let obj1 = knowSum();

console.log(obj1.sum());