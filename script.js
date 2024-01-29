function Merge(A, L, leftCount, R, rightCount) {
  var i = 0
  var j = 0
  var k = 0

  while (i < leftCount && j < rightCount) {
    if (L[i] < R[j]) {
      A[k] = L[i]
      i++
    } else {
      A[k] = R[j]
      j++
    }
    k++
  }

  while (i < leftCount) {
    A[k] = L[i]
    i++
    k++
  }
  while (j < rightCount) {
    A[k] = R[j]
    j++
    k++
  }
}

function Mergesort(A) {
  n = A.length
  if (n < 2) return

  let mid = Math.floor(n / 2)
  let left = []
  let right = []

  for (let i = 0; i < mid; i++) {
    left[i] = A[i]
  }
  for (let i = mid; i < n; i++) {
    right[i - mid] = A[i]
  }
  Mergesort(left)
  Mergesort(right)
  Merge(A, left, left.length, right, right.length)
}

const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  )

function runTests() {
  for (let i = 0; i < 10; i++) {
    const min = 0
    const max = 1000
    let A = randomIntArrayInRange(min, max, 10)
    console.log("Unsorted array: ", A)
    Mergesort(A)
    console.log("Sorted array: ", A)
  }
}

runTests()
