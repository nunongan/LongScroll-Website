$(document).ready(function(){
    
    setAncoras();
}
                                  
);

function setAncoras(){
    
    $("nav a").click(function(e){
        
        e.preventDefault(); /*Impedir o salto automatico */
        
        var sectionID= e.currentTarget.id +"Section";
        alert("id do botão"+ sectionID); 
        
        $("html, body").animate({
            
            
            scrollTop:$("#"+ sectionID).offset().top
        },1000)
        
        
        
        
    })
}
