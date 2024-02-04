const divContainer = document.getElementById("divContainer")
const playBtn = document.getElementById("playBtn")

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

  //displayArray(L, R, A)
}

function displayArray(left, right, merged) {
  let IL = []
  let prel = left.concat(right)
  for (let i = 0; i < prel.length; i++) {
    IL.push(checkIndex(prel[i]))
  }
  for (let i = 0; i < IL.length; i++) {
    Acopy[IL[i]] = merged[i]
  }
  //console.log("comparing", left, right, "indicies", IL, "and merged", merged)
  //console.log("with indicies", IL, "from the original array", Acopy1)
  console.log("Acopy", Acopy)

  for (let i = 0; i < Acopy.length; i++) {
    document.getElementById(`div${i}`).style.height = `${Acopy[i] * 10}px`
  }
  //console.log("the divs that are red now are", IL)
}

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const Mergesort = async (A) => {
  n = A.length
  if (n < 2) return

  let mid = Math.round(n / 2)
  let left = []
  let right = []

  for (let i = 0; i < mid; i++) {
    left[i] = A[i]
  }
  for (let i = mid; i < n; i++) {
    right[i - mid] = A[i]
  }

  await Mergesort(left)
  await Mergesort(right)
  Merge(A, left, left.length, right, right.length)
  await timeout(1000)
  displayArray(left, right, A)
}

function checkIndex(element) {
  if (!Acopy.includes(element)) {
    //console.log("The element:", element, "is not inlcuded in the array")
    return
  }
  let index = 0
  while (Acopy[index] != element && index < Acopy.length) {
    index = index + 1
  }
  return index
}

// Generate arrays to test

let A = [2, 4, 6, 1, 8, 5, 3, 7]
let Acopy = [2, 4, 6, 1, 8, 5, 3, 7]
let Acopy1 = [2, 4, 6, 1, 8, 5, 3, 7]

playBtn.addEventListener("click", (e) => {
  Mergesort(A)
})
