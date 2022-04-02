
console.log('who is this');
const panels = document.querySelectorAll('.panel');


panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        // console.log(123);
        removeClasses();
        panel.classList.add('active');
    });
});

function removeClasses(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}