const data = [
    {
        id: 1,
        question:
            "Lorem ipsum dolor sit amet. Lorem ipsum dolor ",
        answer:
            "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.sit amet consectetur.",
    },
    {
        id: 2,
        question:
            "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.",
        answer:
            "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.sit amet consectetur.sit amet consectetur.sit amet consectetur.",
    },
    {
        id: 3,
        question:
            "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.",
        answer:
            "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.sit amet consectetur.sit amet consectetur.sit amet consectetur.",
    },
    {
        id: 4,
        question:
            "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.",
        answer:
            "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.sit amet consectetur.sit amet consectetur.sit amet consectetur.",
    },
];

let accordianQues = document.querySelector(".accordian");

function createAccordianData() {
    accordianQues.innerHTML = data.map(
        (currentItem) =>
            ` <div class ='question'> 
            <h3 class="title"> ${currentItem.question} </h3>
            <i class="fa-solid fa-arrow-up"></i>
          </div>
          <div class='answer'>
            <p> ${currentItem.answer} <p/>
          </div>
        
        `
    );
}

createAccordianData();


let queries=document.querySelectorAll('.question')

queries.forEach(item => {
    item.addEventListener('click',function(e){
        if(item.classList.contains('active')){
            item.classList.remove('active')
        }else{
            let alreadyActive=document.querySelectorAll(".active");
            alreadyActive.forEach(activeItem=>{
                activeItem.classList.remove('active')
            })
            item.classList.add('active')
        }
    })
});