const arr = [3, 4, 6, 8, 9, 10];
const target = 19;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
            console.log(i, j);
            process.exit(1);
        } else { error() }

    }

}
function error() {
    console.log("no match")
}