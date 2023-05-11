function nav(){
    var postsList = ['1.html','2.html','3.html','4.html'];
    var current = window.location.pathname.split('/').pop();
    var previous = document.getElementById('previous');
    var next = document.getElementById('next');

    if (postsList.includes(current)){
        var currentIndex = postsList.indexOf(current);
    
     if ( currentIndex === (postsList.length-1)){

            next.href = './'+ postsList[currentIndex];

        }
        else{
            next.href = './'+postsList[currentIndex + 1];
            
        }


        if( currentIndex == 0 ){
            previous.href = './'+postsList[currentIndex];

            
        }else{
            previous.href = './'+postsList[currentIndex - 1];
            
        } 
    }
}


function navMenu(active){

    //alert(active);

    let selected = "";

    
    if(active == "home") {
        selected = 'active';
    }		if(active == "about") {
        selected = 'active';
    }		if(active == "services") {
        selected = 'active';
    }		if(active == "careers") {
        selected = 'active';
    }

    let div = document.createElement("div");
    let unorderedList = document.createElement("ul");
    let link = document.createElement("a");
    let icon = document.createElement("i");

    div.classList.add("navbar-collapse", "collapse");
    unorderedList.classList.add('nav', 'navbar-nav', 'navbar-right');
    icon.classList.add("fa", "fa-envelope-o");
    div.appendChild(unorderedList);


    for (let i = 0; i < 5; i++) {
        let li_elem = document.createElement("li")
        li_elem.classList.add(selected);
        unorderedList.appendChild(li_elem);
    }


    unorderedList.childNodes[0].textContent = "HOME";
    unorderedList.childNodes[1].textContent = "ABOUT";
    unorderedList.childNodes[2].textContent = "SERVICES";
    unorderedList.childNodes[3].textContent = "CAREERS";

    unorderedList.childNodes[0].setAttribute("href","index.php");
    unorderedList.childNodes[1].setAttribute("href","about.php");
    unorderedList.childNodes[2].setAttribute("href","services.php");
    unorderedList.childNodes[3].setAttribute("href","careers.php");
    unorderedList.childNodes[4].appendChild(link);


    link.setAttribute("data-toggle", "modal");
    link.setAttribute("data-target", "#myModal");
    link.setAttribute("href", "#myModal");
    

    
    link.appendChild(icon);
    



}