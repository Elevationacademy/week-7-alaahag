/* Write your code below */

class Matrix {
    constructor(colNum, rowNum){
        this.data = [];
        this.generateMatrix(colNum, rowNum);
    }

    generateMatrix(colNum, rowNum){
        this.data = new Array(colNum);
        for (let row = 0; row < colNum; row++)
            this.data[row] = new Array(rowNum);

        let counter = 1;
        for (let row=0; row<rowNum; row++){
            for (let col=0; col<colNum; col++){
                this.data[col][row] = counter++;
            }
        }
    }

    findCoordinate(val){
        //Returns an object {x: colNum, y: rowNum} of the first occurrence of value
        let counter = 1;
        for (let rowNum=0; rowNum<this.data.length; rowNum++){
            for (let colNum=0; colNum<this.data[rowNum].length; colNum++){
                if (counter == val){
                    return {x: colNum, y: rowNum};
                }
                else
                    counter++;
            }
        }
    }

    print(){
        console.log(this.data);
    }

    alter(colNum, rowNum, newData){
        this.data[colNum][rowNum] = newData;
    }

    get(colNum, rowNum){
        return this.data[rowNum][colNum];
    }

    printColumn(colNum){
        for (let i=0; i<this.data.length; i++)
            console.log(this.data[i][colNum]);
    }

    printRow(rowNum){
        console.log(this.data[rowNum]);
    }
}


class EmployeeMatrix extends Matrix {
    constructor(){
        super();
        this.data = [];
    }

    loadData(salaryData){
        const col = Object.keys(salaryData).length;
        const row = Object.entries(salaryData[0]).length;
        this.generateMatrix(col, row);

        for (let rowNum=0; rowNum<Object.keys(salaryData).length; rowNum++){
            for (let colNum=0; colNum<Object.entries(salaryData[rowNum]).length; colNum++){
                this.data[rowNum][colNum] = Object.entries(salaryData[rowNum])[colNum][1];
            }
        }
    }

    getEmployees(department){
        let res = [];
        for (let rowNum=0; rowNum<this.data.length; rowNum++){
            if (this.data[rowNum][2] === department)
                res.push(this.data[rowNum][1]);
        }
        return res;
    }

    getTotalSalary(department){
        let counter = 0;
        for (let rowNum=0; rowNum<this.data.length; rowNum++){
            if (this.data[rowNum][2] === department)
                counter+= this.data[rowNum][3];
        }
        return counter;
    }

    findRichest(){
        let sum = 0;
        let savePos;
        for (let rowNum=0; rowNum<this.data.length; rowNum++){
            if (this.data[rowNum][3] > sum){
                sum = this.data[rowNum][3];
                savePos = rowNum;
            }
        }
        return this.data[savePos][1];
    }
}


class TicTacToe extends Matrix {
    constructor(){
        super();
        this.data = [];
        this.lastPlayed = null;
    }

    loadBoard(){
        this.data = new Array(3);
        for (let rowNum = 0; rowNum <3; rowNum++) {
            this.data[rowNum] = new Array(3);
            for (let colNum=0; colNum<3; colNum++){
                this.data[rowNum][colNum] = ".";
            }
        }
    }

    play(rowNum, columnNum, player){
        let p = player==1? "x" : "o";

        //dont play over other players-marks
        if (this.data[rowNum][columnNum] !== ".")
            return;

        //dont let the same player to play twice
        if (this.lastPlayed !== p)
            this.lastPlayed = p;
        else
            return;

        this.data[rowNum][columnNum] = p;

        //check win:
        let count_x_row = 0, count_x_col = 0, count_o_row = 0, count_o_col = 0;
        for (let r = 0; r <3; r++) {
            for (let c=0; c<3; c++){
                if (this.data[r][c] === "x")
                    count_x_row++;

                if (this.data[r][c] === "o")
                    count_o_row++;

                if (this.data[c][r] === "x")
                    count_x_col++;

                if (this.data[c][r] === "o")
                    count_o_col++;
            }

            if (count_x_row === 3 || count_o_row === 3 || count_x_col === 3 || count_o_col === 3)
                break;

            count_x_row = 0;
            count_o_row = 0;
            count_x_col = 0;
            count_o_col = 0;
        }

        const printWinner = (p) => {
            alert(`Congratulations, Player ${p} won!`);

            //reset
            this.loadBoard();
        };

        //conditions to check
        if (this.data[1][1] === "x")
        {
            if ((this.data[0][0] === "x" && this.data[2][2] === "x") || (this.data[2][0] === "x" && this.data[0][2] === "x"))
                printWinner("1");
        }
        else if (this.data[1][1] === "o")
        {
            if ((this.data[0][0] === "o" && this.data[2][2] === "o") || (this.data[2][0] === "o" && this.data[0][2] === "o"))
                printWinner("2");
        }
        else if (count_x_row === 3 || count_x_col === 3)
            printWinner("1");
        else if (count_o_row === 3 || count_o_col === 3)
            printWinner("2");
    }
}