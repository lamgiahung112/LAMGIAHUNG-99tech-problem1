// Time: o(1)
// Space: o(1)
function nSum_1(n) {
	const _absN = Math.abs(n)
	return ((n < 0 ? -1 : 1) * _absN * (_absN + 1)) / 2
}

// Time: o(n)
// space: o(1)
// Very prone to stack overflow
function nSum_2(n) {
	if (n < 0) {
		return -nSum_3(-n)
	}
	if (n === 0) {
		return 0
	}
	return n + nSum_2(n - 1)
}

// Time: o(n)
// Space: o(n)
function nSum_3(n) {
	if (n < 0) {
		return -nSum_3(-n)
	}
	let result = 0
	for (let i = 0; i <= n; i++) {
		result += i
	}
	return result
}

module.exports = { nSum_1, nSum_2, nSum_3 }
