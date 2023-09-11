let productss=JSON.parse(localStorage.getItem("products"))||productDB
console.log(productss)

var matrix = [];
for(var i=0; i<3; i++) {
    matrix[i] = [];
    for(var j=0; j<3; j++) {
        if(i===j){
            matrix[i][j] = 1
        }else{
            matrix[i][j] = 0;
        }
    }
}
console.log(matrix)