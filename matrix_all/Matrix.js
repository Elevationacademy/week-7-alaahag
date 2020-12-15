/* Write your code below */

//ex1
// let m = new Matrix(3, 4)
// m.print()
// //prints
// /*
// 1       2       3       4
// 5       6       7       8
// 9       10      11      12
// */

// m.alter(0, 0, m.get(1, 1))
// m.printColumn(0) //prints 6, 5, 9 (separate lines)
// m.printRow(0) //prints 6, 2, 3, 4 (separate lines)

//ex 2
// let m = new Matrix(3, 4)
// console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
// console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}

// //ex3
// let data = [
//     { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
//     { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
//     { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
//     { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
//     { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
//     { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
// ]

// let m = new EmployeeMatrix()

// m.loadData(data)
// m.print()
// //prints:
// // e10021  Gillian Finance 2000
// // e10725  Tibor   Design  1200
// // e10041  Anisha  Finance 2300
// // e10411  Jakub   Design  1600
// // e11995  Mar     Design  1300
// // e10732  Nisha   Design  1200

// console.log(m.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
// console.log(m.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]

// console.log(m.getTotalSalary("Finance")) //prints 4300
// console.log(m.getTotalSalary("Design")) //prints 5300

// console.log(m.findRichest()) //prints Anisha


//ex 7
// let board = new TicTacToe()
// board.loadBoard()
// board.print()
// //prints

//ex 8 + 9 + all extensions
let board = new TicTacToe()
board.loadBoard()

board.play(2, 2, 1)
board.play(0, 0, 2)
board.play(0, 2, 1)
board.play(1, 0, 2)
board.play(1, 2, 1) //prints Congratulations Player 1

board.print()
//prints
// o       .       x
// o       .       x
// .       .       x