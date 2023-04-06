const faqs = document.querySelectorAll(".faq");
const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".ans");
const icons = document.querySelector(".arrow-icon");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        for(let i = 0; i < faqs.length; i++) {
            if(faq != faqs[i]) {
            if(faqs[i] !== questions[i]) {
                faqs[i].classList.remove("active");
            }
        }
    }
        if(faq.classList.contains("active")) {
            faq.classList.remove("active");
        }
        else {
            faq.classList.toggle("active");
        }
    });
});