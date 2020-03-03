function aList(array) {
    this.defaultArray = array;
    this.init()
}
aList.prototype.init = function() {
    this.array = [];
    this.defaultArray

    let index = 0;
    while (this.defaultArray[index] || this.defaultArray[index] === 0) {
        this.array[index] = this.defaultArray[index];
        index++
    }
}

//1
/////////////////////////
aList.prototype.addStart = function (elem) {
    let arrayAddStart = this.array;
    for (let i = arrayAddStart.length; i>=1; i-- ) {
        arrayAddStart[i] = arrayAddStart[i-1];
    }
    arrayAddStart[0] = elem;
    return this.array = arrayAddStart;
}


//2
////////////////////////
aList.prototype.addEnd = function (elem) {
    let arrayAddEnd = this.array;
    arrayAddEnd[arrayAddEnd.length] = elem;
    return this.array = arrayAddEnd;
}

//3
////////////////////////
aList.prototype.delStart = function () {
    let elem = this.array[0];
    let arrayDelStart = [];
    for(let i = 0; i < this.array.length - 1; i++) {
        arrayDelStart[i] = this.array[i+1];
    }
    this.array = arrayDelStart;
    return elem;
}


//4
////////////////////////
aList.prototype.delEnd = function () {
    let elem = this.array[this.array.length - 1];
    let arrayDelEnd = [];
    for (i = 0; i < this.array.length - 1; i++) {
        arrayDelEnd[i] = this.array[i];
    }
    this.array = arrayDelEnd;
    return elem;
}


//5
////////////////////////
aList.prototype.delPos = function (index) {
    let elem = this.array[index];
    let arrayDelPos = [];
    for(let i = 0; i < this.array.length - 1; i++) {
        arrayDelPos[i] = this.array[i+1];
    }
    this.array = arrayDelPos;
    return elem;
}


//6
////////////////////////
aList.prototype.get = function (index) {
    return this.array[index];
}

//7
////////////////////////
aList.prototype.set = function (index, value) {
    this.array[index] = value;
    return this.array;
}


//8
////////////////////////
aList.prototype.toString = function () {
    let toString = '';
    for(let i = 0; i < this.array.length; i++) {
        toString += this.array[i]; 
    }
    return toString;
}


//9
////////////////////////
aList.prototype.size = function () {
    let index = 0;
    while (this.array[index]) {
        index++
    }
    return index ;
}

//10
////////////////////////
aList.prototype.clear = function () {
    this.array = this.defaultArray;
    return this.array;
}


//11
////////////////////////
aList.prototype.minn = function() {
let min = this.array[0];
for(let i = 1; i < this.array.length; i++) {
    if(min>this.array[i]) {
        min = this.array[i]
    }
}
return min;
}


//12
////////////////////////
aList.prototype.max = function() {
    let max = this.array[0];
    for(let i = 0; i < this.array.length; i++) {
        if(this.array[i] > max)
        max = this.array[i];
    }
    return max;
}


//13
////////////////////////
aList.prototype.sort = function() {
    for(let j = 0; j < this.array.length; j++) {
        for(let i = 0; i < this.array.length - j; i++) {
            if(this.array[i] > this.array[i + 1]) {
                let z = this.array[i];
                this.array[i] = this.array[i + 1];
                this.array[i + 1] = z;
            }
        }
    }
    return this.array;
}


//14
////////////////////////
aList.prototype.maxIndex = function () {
    let max = this.array[0];
    let maxIndex = 0;
    for (i = 0; i <this.array.length; i++) {
        if (max < this.array[i]) {
            max = this.array[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}



//15
////////////////////////
aList.prototype.minIndex = function () {
    let min = this.array[0];
    let minIndex = 0;
    for (i = 0; i <this.array.length; i++) {
        if (min > this.array[i]) {
            min = this.array[i];
            minIndex = i;
        }
    }
    return minIndex;
}



//16
////////////////////////
aList.prototype.reverse = function() {
    let size1 = this.array.length - 1;
    let elem = this.array[0];
    for (i = 0; i <= size1/2; i++)
    {
        elem = this.array[i];
        this.array[i] = this.array[size1 - i];
        this.array[size1 - i] = elem;
    }
    return this.array;

}

//17
////////////////////////
aList.prototype.halfReverse=function(){
    function rev(size){
        if (size % 2)
        return (size - 1)/2;
        else return size/2;
    }
    let half=rev(this.array.length)
    let halfArr=[]
    for(let i = 0; i < half; i++) {
        if(this.array.length % 2) {
            halfArr[i] = this.array[half-(i+1)]
            halfArr[i+half+1] = this.array[this.array.length-(i+1)]
            halfArr[half] = this.array[half]
        }
        else
        {
            halfArr[i] = this.array[half-(i+1)]
            halfArr[i+half] = this.array[this.array.length-(i+1)]  
        }
    }
    return this.array = halfArr;
}

//18
////////////////////////
aList.prototype.addPosition=function(element, index){
    let arrayPosAdd = [];
    arrayPosAdd[index]=element;
    for(let i = 0; i < index; i++)
    arrayPosAdd[i] = this.array[i];
    for(let i = index; i < this.array.length; i++)
    arrayPosAdd[i+1] = this.array[i];
    this.array = arrayPosAdd;
    return element;
}
module.exports.aList = aList

