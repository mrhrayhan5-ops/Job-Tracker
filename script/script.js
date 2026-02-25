let interviewList = [];
let rejectedList = [];
let currentStatus = "all";

let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");
let count = document.getElementById('count');

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const allCardSection = document.getElementById("all-card");
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById("filtered-section");
const noContant = document.getElementById("no-contant");

function cardCount() {
    totalCount.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

    if (currentStatus === "all-filter-btn") {
        count.innerText = allCardSection.children.length;
    } else if (currentStatus === "interview-filter-btn") {
        count.innerText = interviewList.length;
    } else if (currentStatus === "rejected-filter-btn") {
        count.innerText = rejectedList.length;
    }
}

cardCount();

function toggleStyle(id) {

    allFilterBtn.classList.remove("bg-blue-400");
    interviewFilterBtn.classList.remove("bg-blue-400");
    rejectedFilterBtn.classList.remove("bg-blue-400");

    const selected = document.getElementById(id);
    currentStatus = id;

    selected.classList.add("bg-blue-400");

    if (id === 'interview-filter-btn') {

        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();

    } else if (id === 'all-filter-btn') {

        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
        noContant.classList.add("hidden");

    } else if (id === 'rejected-filter-btn') {

        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected();
    }

    cardCount();
}

mainContainer.addEventListener("click", function (event) {

    const parentNode = event.target.closest(".shadow-lg");

    //  INTERVIEW
    if (event.target.classList.contains("interview-btn")) {

        const companyName = parentNode.querySelector(".company-name").innerText;
        const jobPosition = parentNode.querySelector(".job-position").innerText;
        const jobDetail = parentNode.querySelector(".job-detail").innerText;
        const jobDescription = parentNode.querySelector(".job-description").innerText;

        parentNode.querySelector(".job-status").innerText = "Interview";

        const cardInfo = {
            companyName,
            jobPosition,
            jobDetail,
            jobStatus: "Interview",
            jobDescription,
        };

        const exist = interviewList.find(item => item.companyName === companyName);
        if (!exist) interviewList.push(cardInfo);

        rejectedList = rejectedList.filter(item => item.companyName !== companyName);

        if (currentStatus === "interview-filter-btn") renderInterview();
        if (currentStatus === "rejected-filter-btn") renderRejected();

        cardCount();
    }

    //  REJECTED
    if (event.target.classList.contains("rejected-btn")) {

        const companyName = parentNode.querySelector(".company-name").innerText;
        const jobPosition = parentNode.querySelector(".job-position").innerText;
        const jobDetail = parentNode.querySelector(".job-detail").innerText;
        const jobDescription = parentNode.querySelector(".job-description").innerText;

        parentNode.querySelector(".job-status").innerText = "Rejected";

        const cardInfo = {
            companyName,
            jobPosition,
            jobDetail,
            jobStatus: "Rejected",
            jobDescription,
        };

        const exist = rejectedList.find(item => item.companyName === companyName);
        if (!exist) rejectedList.push(cardInfo);

        interviewList = interviewList.filter(item => item.companyName !== companyName);

        if (currentStatus === "interview-filter-btn") renderInterview();
        if (currentStatus === "rejected-filter-btn") renderRejected();

        cardCount();
    }

    //  DELETE
    if (event.target.closest(".delate-btn")) {

        const companyName = parentNode.querySelector(".company-name").innerText;

        interviewList = interviewList.filter(item => item.companyName !== companyName);
        rejectedList = rejectedList.filter(item => item.companyName !== companyName);

        parentNode.remove();

        if (currentStatus === "interview-filter-btn") renderInterview();
        if (currentStatus === "rejected-filter-btn") renderRejected();

        cardCount();
    }
});


function renderInterview() {

    filterSection.innerHTML = "";

    if (interviewList.length === 0) {
        noContant.classList.remove("hidden");
        return;
    }

    noContant.classList.add("hidden");

    for (let interview of interviewList) {

        let div = document.createElement("div");
        div.className = "shadow-lg p-6 rounded-sm";

        div.innerHTML = `
        <div class="flex justify-between">
            <div>
                <h2 class="company-name text-2xl font-semibold mb-1">${interview.companyName}</h2>
                <p class="job-position text-gray-600 font-medium mb-3">${interview.jobPosition}</p>
            </div>
            <div class="border border-gray-300 rounded-full btn">
                <button class="delate-btn"><i class="fa-regular fa-trash-can"></i></button>
            </div>
        </div>

        <p class="job-detail text-[15px] mb-4">${interview.jobDetail}</p>
        <div>
            <p class="job-status mb-3 bg-blue-200 w-[100px] rounded-sm py-2 text-center">${interview.jobStatus}</p>
            <P class="job-description">${interview.jobDescription}</P>
        </div>
        <div class="mt-5 flex gap-6">
            <button class="btn interview-btn border-2 border-green-500 rounded-sm text-green-500 font-semibold">INTERVIEW</button>
            <button class="btn rejected-btn border-2 border-red-500 rounded-sm text-red-500 font-semibold">REJECTED</button>
        </div>`;

        filterSection.appendChild(div);
    }
}

function renderRejected() {

    filterSection.innerHTML = "";

    if (rejectedList.length === 0) {
        noContant.classList.remove("hidden");
        return;
    }

    noContant.classList.add("hidden");

    for (let reject of rejectedList) {

        let div = document.createElement("div");
        div.className = "shadow-lg p-6 rounded-sm";

        div.innerHTML = `
        <div class="flex justify-between">
            <div>
                <h2 class="company-name text-2xl font-semibold mb-1">${reject.companyName}</h2>
                <p class="job-position text-gray-600 font-medium mb-3">${reject.jobPosition}</p>
            </div>
            <div class="border border-gray-300 rounded-full btn">
                <button class="delate-btn"><i class="fa-regular fa-trash-can"></i></button>
            </div>
        </div>

        <p class="job-detail text-[15px] mb-4">${reject.jobDetail}</p>
        <div>
            <p class="job-status mb-3 bg-blue-200 w-[100px] rounded-sm py-2 text-center">${reject.jobStatus}</p>
            <P class="job-description">${reject.jobDescription}</P>
        </div>
        <div class="mt-5 flex gap-6">
            <button class="btn interview-btn border-2 border-green-500 rounded-sm text-green-500 font-semibold">INTERVIEW</button>
            <button class="btn rejected-btn border-2 border-red-500 rounded-sm text-red-500 font-semibold">REJECTED</button>
        </div>`;

        filterSection.appendChild(div);
    }
}