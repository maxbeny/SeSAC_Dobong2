let fruits1 = ["사과","딸기","파인애플","수박","참외","오렌지","자두","망고"]
let fruits2 = ["수박","사과","참외","오렌지","파인애플","망고"]

let same = fruits1.filter(function(f1){
    return fruits2.includes(f1)
})
let diff = [
    fruits1.filter(function(f2) {
        return !fruits2.includes(f2)
    }),
    fruits2.filter(function(f2) {
        return !fruits1.includes(f2)
    })
]
console.log("동일요소",same)
console.log("다른요소",diff)