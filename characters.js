const sections = document.querySelectorAll('.one-section')

sections.forEach((section) => {
    const names = section.querySelectorAll('.name');
    const reveals = section.querySelectorAll('.reveal');

    window.addEventListener('DOMContentLoaded', function() {
        reveal(0)
    })
    
    for (var i = 0; i < names.length; i++){
        (function(index) {
            names[index].addEventListener('click', function() {
                reveal(index);
            });
        })(i);
    }
    
    function reveal(num){
        for (var i = 0; i < reveals.length; i++){
            if (i !== num){
                reveals[i].classList.remove('active');
                names[i].classList.remove('active');
            }
        }
        for (var i = 0; i < reveals.length; i++){
            if (i === num){
                reveals[i].classList.add('active');
                names[i].classList.add('active');
            }
        }
    }
})
