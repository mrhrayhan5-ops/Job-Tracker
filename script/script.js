let interviewList = [];
let rejectedList = [];

let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const allCard = document.getElementById("all-card");
const mainContainer = document.querySelector("main");

function cardCount() {
    total.innerText = allCard.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
cardCount()

function toggleStyle(id) {
    allFilterBtn.classList.remove("bg-blue-400");
    interviewFilterBtn.classList.remove("bg-blue-400");
    rejectedFilterBtn.classList.remove("bg-blue-400");

    const selected = document.getElementById(id);
    selected.classList.remove("bg-base-200");
    selected.classList.add("bg-blue-400");
}