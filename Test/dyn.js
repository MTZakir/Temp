document.addEventListener('DOMContentLoaded', function(){
    let clip = document.querySelector(".vid");
    
    clip.addEventListener('mouseover', function(e)
    {
        clip.play();
    })
    
    clip.addEventListener("mouseout", function(e)
    {
        clip.pause();
    })
    
    let clip2 = document.getElementById("tissot");
    
    clip2.addEventListener('mouseover', function(e)
    {
        clip2.play();
    })
    
    clip2.addEventListener("mouseout", function(e)
    {
        clip2.pause();
    })

})