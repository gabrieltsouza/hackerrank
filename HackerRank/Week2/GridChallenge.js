let grid = [];
grid[0] = 'habf';
grid[1] = 'zcts';
grid[2] = 'dfgh';
grid[3] = 'zmbv';
//grid[0] = ['d', 'a', 'b', 'f']
//grid[1] = ['g', 'c', 'p', 'k']
//grid[2] = ['t', 'f', 's', 'l']
//grid[3] = ['z', 'm', 'x', 'm']
function rearrangeGrid (grid){
    for (let count=0;count<grid.length;count++){
        grid[count] = grid[count].split('').sort().join('');
    }
    let lastValue;
    for (let col=0;col<grid[0].split('').length;col++){
        lastValue = 0;
        for (let row=0;row<grid.length;row++){
            if (lastValue > grid[row].split('')[col].charCodeAt()){
                return 'NO';
            }
            lastValue = grid[row].split('')[col].charCodeAt();
        }
    }
    return 'YES';
}
console.log(rearrangeGrid(grid));