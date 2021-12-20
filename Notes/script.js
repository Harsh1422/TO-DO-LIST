showNotes();
let MenuT=document.getElementById("T");
MenuT.addEventListener("click",()=>
{
    if(MenuT.classList.contains("fa-bars"))
    {
        MenuT.classList.remove("fa-bars");
        MenuT.classList.add("fa-times");

    }
    else
    {
        MenuT.classList.remove("fa-times");
        MenuT.classList.add("fa-bars");
    }
    document.getElementById("nav").classList.toggle("active");
});
let AddNote=document.getElementById("AddNote");
function showNotes()
{
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
        notesobj=[];
    }
    else
    {
        notesobj=JSON.parse(notes);
    }
    let html="";
   notesobj.forEach((element,index) => {
        html+=` <div class="card">
        <div class="content">
            <h2>${index +1}</h2>
            <h3>Note ${index +1}</h3>
            <p>${element}</p>
            <button id="${index}" onclick="deletenote(this.id)">Delete</button>
        </div>
    </div>`       
   });
   if(notesobj.length !=0)
   {
   document.getElementById("container").innerHTML=html;
   }
   else
   {
    document.getElementById("container").innerHTML="Nothing to show Please add a Note";
   }

}
AddNote.addEventListener("click",()=>
{
    let inputtext=document.getElementById("notes").value;
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
        notesobj=[];
    }
    else
    {
        notesobj=JSON.parse(notes);
    }
    notesobj.push(inputtext);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    document.getElementById("notes").value="";
    showNotes();
})
function deletenote(index)
{
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
        notesobj=[];
    }
    else
    {
        notesobj=JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    showNotes();
}