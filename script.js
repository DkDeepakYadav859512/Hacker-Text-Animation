const para = document.querySelector('p');
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = para.innerText;
let iteration = 0;



function randomText(){
    const str = text.split("").map((char,index)=>{
        if(index < iteration) {
            console.log(char);
            return char
        }
        return characters.split("")[Math.floor(Math.random() * 52)];
    }).join("");
    para.innerText = str;
    iteration += 0.2;
    
}
setInterval(randomText, 30);




// let iteration = 0;
// para.addEventListener("mouseenter",function(){
//    setInterval(function(){
    
    
//     const str = text.split('').map((char,index) => { 
//         if(index < iteration){
//             return char;
//         }
//         return characters.split("")[Math.floor(Math.random()*53)];    
//     }).join("")
//     // console.log(str);
//     para.innerText = str;

//     iteration += 0.2;
   

// },50)  
// })