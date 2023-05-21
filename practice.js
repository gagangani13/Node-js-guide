// const multi=(num1,num2)=>{
//     return num1*num2
// }
// const a=multi(2,6)
// console.log(a)



//currying
// const multi2=(num1)=>{
//     return (num2)=>{
//         num1*num2
//     }
// }
// const a2=multi2(2)
// const b2=a2(6)
// console.log(a2)
async function fun() {
    console.log('a');
    console.log('b');
    const prom1=new Promise((resolve,reject)=>{
        setTimeout(() => resolve('c'), 3000)
    })
    const res1=await prom1
    console.log(res1)
    const prom2=new Promise((resolve,reject)=>{
        setTimeout(() => resolve('d'), 0)
    })
    const res2=await prom2
    console.log(res2)
    console.log('e');  
}
fun()
