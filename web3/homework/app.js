// var content = document.getElementById("content").addEventListener("input",function(){
//     var check = document.getElementById("count").innerText = 200 - document.getElementById("content").value.length;
// });
document.querySelector("textarea").addEventListener("input",function(){
    const length = document.querySelector("textarea").value.length;
    const remainChar = 200 - length;
    console.log(remainChar);
    document.getElementById("count").innerText = remainChar;
})

