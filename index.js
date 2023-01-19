function changetoggler(){
    let toggle = false
    //    transform: translateY(8px);

    let el = document.getElementsByClassName("disable")
    let canvas = document.getElementsByClassName("myoffcanvas")
    let nav = document.getElementsByClassName('navbar')
    
    if( el[0].style.transform == "translateY(0px)" ) toggle = true;
   
    
    if(toggle){
        nav[0].style.position = 'fixed'
        document.getElementById("offset").style.display = 'block'
        canvas[0].style.marginLeft = "0px"
        el[0].style.transform = 'translateY(8px)'
        el[1].style.transform = 'translateY(-8px)'
        
    }
    else{
        document.getElementById("offset").style.display = 'none'
        nav[0].style.position = 'static'
        canvas[0].style.marginLeft = "-60vh"
        el[0].style.display = 'block'
        el[1].style.display = 'block'
        el[0].style.transform = 'translateY(0px)'
        el[1].style.transform = 'translateY(0px)'
    }
}

function changetext(num){
    let txt1 = 'Los Santos Drug Wars Now Available'
    let txt2 = 'The Criminal EnterPrises Now Available'
    let txt3 = 'Get the New BF Weevil Custom from Benny’s'
    let txt4 = 'The New Declasse Draugur Out Now'
    let holder = document.getElementById('hold')

    switch(num){
        case 1:
            holder.innerText = txt1
            break
        case 2:
            holder.innerText = txt2
            break
        case 3:
            holder.innerText = txt3
            break
        case 4:
            holder.innerText = txt4
            break
        default:
            holder.innerText = txt1
            break

    }

}
