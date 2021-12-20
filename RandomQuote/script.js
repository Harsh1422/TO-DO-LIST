let btn=document.getElementById("NewQuote");
let content=document.getElementById("content");
let author=document.getElementById("author");
async function grab()
{
    let respons= await fetch("https://api.quotable.io/random");
    
    let data= await respons.json();
    content.innerHTML=data.content;
    author.innerHTML=data.author;
}
grab();
btn.addEventListener("click",()=>
{
    grab();
})