const odd =() => {
    const arr = document.getElementById("in").value;
    console.log(arr);
    const a = arr.split(" ");
    console.log(a);
    const nums = a.map ((str)=> {
        return Number(str);
    }

 ) ;
console.log(nums);
const n = nums.filter((num)=>{
    return num%2!=0;
});
const output = document.getElementById("out");
output.value+n;
};
const even= ()=>{
 const arr= document.getElementById("in").value;
 console.log(arr)
 const a = arr.split(" ");
 console.log(a);
 const nums = a.map((str)=>{
    return Number(str);
 })
 console.log(nums);

 const n =nums.filter((num)=>{
 return num %2==0;
});
const output = document.getElementById("out");
output.value= n;
};


