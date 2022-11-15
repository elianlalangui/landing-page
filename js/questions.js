(function(){
    const titleQuestions = [...document.querySelectorAll(".questions__title")];
    titleQuestions.forEach(question =>{
        question.addEventListener("click", e=>{
            let height = 0;
            let answer = question.nextElementSibling;

            question.children[0].classList.toggle("questions__arrow--rotate");
            let addPadding = question.parentElement.parentElement; 

            addPadding.classList.toggle("questions__padding--add");
            console.log(answer);

            if(answer.clientHeight === 0){
                height = answer.scrollHeight; //Alto minimo
            }

            answer.style.height = `${height}px`;



        });
    });
})();