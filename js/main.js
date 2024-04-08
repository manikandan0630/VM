let bar=document.getElementById("bar")
let mark=document.getElementById("mark")
//addevent listener
bar.addEventListener("click",()=>{
    let menulist=document.querySelector('ul')
    menulist.style.display='flex'
    menulist.style.flexDirection='column'
    //when i click the toggle display none in set the bar icon
   bar.style.display="none"
    //display the mark icon
    mark.style.display="block"
    //menu button disp lay block
    document.getElementById("menubutton").style.display="block"
//event listner for mark icon
    document.getElementById("mark").addEventListener("click",()=>{
        //settign ul list display none
        menulist.style.display="none"
        //setting mark icon in display none
        mark.style.display="none"
        //setting menu icon in display block
        bar.style.display="block"
        //again disply  none setting the menu button

        document.getElementById("menubutton").style.display="none"
    })
   
})