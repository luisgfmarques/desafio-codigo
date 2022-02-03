const solucao = require('./solucao');

const standardarray = [8, 5, 10, 5, 2, 4, 4, 3]
const array = [
    31, 7, 92, 98, 81, 34, 79, 31, 62, 14, 38, 62,
    16, 98, 78, 41, 30, 44, 85, 36, 18, 72, 19, 14,
    88, 38, 51, 87, 86, 33, 80, 55, 76, 14, 20, 32, 75,
    30, 61, 54, 24, 97, 26, 80, 68, 19, 33, 97, 40, 57,
    73, 96, 46, 12, 24, 51, 92, 50, 33, 60, 29, 67, 15,
    17, 15, 54, 71, 69, 35, 83, 91, 5, 70, 72, 38, 17,
    19, 37, 42, 88, 60, 23, 35, 61, 68, 35, 63, 73, 51,
    36, 18, 52, 77, 70, 53, 69, 50, 26, 24, 48, 98, 35,
    3, 19, 93, 81, 75, 76, 66, 90, 89, 90, 74, 7, 85, 83,
    67, 88, 46, 71, 55, 17, 66, 52, 68, 93, 19, 63, 5, 23,
    8, 95, 48, 37, 57, 14, 26, 76, 84, 71, 87, 90, 11, 76,
    57, 9, 11, 28, 95, 98, 69, 45, 60, 20, 95, 30, 13, 93,
    53, 9, 46, 98, 2, 48, 34, 96, 17, 28, 82, 57, 47, 18,
    80, 94, 23, 36, 48, 43, 14, 64, 48, 36, 13, 92, 85, 82,
    2, 79, 32, 26, 2, 81, 37, 87, 66, 24, 69, 26, 34, 8
]
const result = [
    2, 3, 5, 7, 8, 9, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 23, 24, 26, 28, 29, 30, 31, 32,
    33, 34, 35, 36, 37, 38, 40, 41, 42, 43, 44, 45,
    46, 47, 48, 50, 51, 52, 53, 54, 55, 57, 60, 61,
    62, 63, 64, 66, 67, 68, 69, 70, 71, 72, 73, 74,
    75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86,
    87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98
]
const randomarray = Array.from({ length: 200 }, () => Math.round(Math.random() * 100))
const sudokutrue = [["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

const sudokufalse = [["8", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

test('test Ordena e retira iguais Tipo1', () => {
    expect(solucao.Tipo1(standardarray)).toEqual([2, 3, 4, 5, 8, 10]);
    expect(solucao.Tipo1(array)).toEqual(result);
});
test('test Ordena e retira iguais Tipo2', () => {
    expect(solucao.Tipo2(standardarray)).toEqual([2, 3, 4, 5, 8, 10]);
    expect(solucao.Tipo2(array)).toEqual(result);
});
test('test validação cruzada com os 2 tipos em array randômico', () => {
    expect(solucao.Tipo1(randomarray)).toEqual(solucao.Tipo2(randomarray));
});
test('test validação Sudoku', () => {
    expect(solucao.ValidaSudoku(sudokutrue)).toEqual(true);
    expect(solucao.ValidaSudoku(sudokufalse)).toEqual(false);
});