window.onload = () => {

    const counts = document.querySelectorAll(".star-count");

    
    const quitarClase = ( class_ ) => {
        const arr = document.querySelectorAll( `.${class_}` );
        
        for( item of arr ){
            item.classList.toggle( class_ );
        }
    };

    for( const count of counts ){
        count.addEventListener("click",() => {
            quitarClase( "count-active" );
            count.classList.toggle( "count-active" );
        } );
    }

    const btnSubmit = document.getElementById("btn-submit");

    btnSubmit.addEventListener('click', () => {
        const count = document.querySelector( ".count-active" );
        if(count){
            const card = document.querySelector(".card");
            card.style.display = "none";
            const card_submit = document.querySelector(".card-submit");
            card_submit.style.display = "flex";
            const res = document.querySelector(".result");
            res.innerText = `You selected ${parseInt(count.innerText)} out of 5`;
        }
    });

}
    

