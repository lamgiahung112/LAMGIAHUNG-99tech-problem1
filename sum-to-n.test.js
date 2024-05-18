const { nSum_1, nSum_2, nSum_3 } = require("./sum-to-n")

const tests = [
	[0, 0],
	[9, 45],
	[500, 125250],
	[10000, 50005000],
	[-7, -28],
	[-24953, -311338581],
]

console.log("=======================")
console.log("nSum1")
for (const test of tests) {
	const res = nSum_1(test[0])
	console.log(`Number: ${test[0]}: Test ${res === test[1] ? "passed" : "failed"}`)
}
console.log("=======================")
console.log("nSum3")
for (const test of tests) {
	const res = nSum_3(test[0])
	console.log(`Number: ${test[0]}: Test ${res === test[1] ? "passed" : "failed"}`)
}
console.log("=======================")
console.log("nSum2")
for (const test of tests) {
	const res = nSum_2(test[0])
	console.log(`Number: ${test[0]}: Test ${res === test[1] ? "passed" : "failed"}`)
}
