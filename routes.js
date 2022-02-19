function nav(){
    var postsList = ['1','2','3','4'];
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