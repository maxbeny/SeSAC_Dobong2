let arr=[];
for(let i=0;i <100;i++){
    arr[i]=i+1
}
let sum1=0
let sum2=0
let sum3=0

for(let i=0;i <arr.length;i++){
    sum1+=arr[i]
}
for(let bs of arr){
    sum2+=bs
    // console.log(bs)
}
arr.forEach(function(num){
    sum3+=num
})
console.log(sum1)
console.log(sum2)
console.log(sum3)
