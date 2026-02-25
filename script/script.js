let interviewList = [];
let rejectedList = [];
let currentStatus = "allx`"

let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

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
}
cardCount()

function toggleStyle(id) {
    allFilterBtn.classList.remove("bg-blue-400");
    interviewFilterBtn.classList.remove("bg-blue-400");
    rejectedFilterBtn.classList.remove("bg-blue-400");

    const selected = document.getElementById(id);

    // currentStatus = id
    // console.log(currentStatus);

    selected.classList.remove("bg-base-200");
    selected.classList.add("bg-blue-400");

    if (id == 'interview-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview()
    } else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    } else if (id == 'rejected-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected()
    }
}

allCardSection.addEventListener("click", function (event) {
    
    console.log(event.target.classList.contains("interview"))

    if (event.target.classList.contains("interview")) {
        const parentNode = event.target.parentNode.parentNode;

        const companyName = parentNode.querySelector(".company-name").innerText
        const jobPosition = parentNode.querySelector(".job-position").innerText
        const jobDetail = parentNode.querySelector(".job-detail").innerText
        const jobStatus = parentNode.querySelector(".job-status").innerText
        const jobDescription = parentNode.querySelector(".job-description").innerText

        const cardInfo = {
            companyName,
            jobPosition,
            jobDetail,
            jobStatus,
            jobDescription,
        }
        const interviewExist = interviewList.find(item => item.companyName == cardInfo.companyName);
        if (!interviewExist) {
            interviewList.push(cardInfo);
        }
        renderInterview()
    }
})


function renderInterview() {
    filterSection.innerHTML = ""
    for (let interview of interviewList) {
        console.log(interview);
        let div = document.createElement("div");
        div.className = "shadow-lg p-6 rounded-sm"
        div.innerHTML = `
        <div class="flex justify-between">
                    <div>
                        <h2 class="company-name text-2xl font-semibold mb-1">Mobile First Corp</h2>
                        <p class="job-position text-gray-600 font-medium mb-3">React Native Developer</p>
                    </div>
                    <div class="border border-gray-300 rounded-full btn">
                        <button class="delate-btn"><i class="fa-regular fa-trash-can"></i></button>
                    </div>
                </div>

                <p class="job-detail text-[15px] mb-4">Remote • Full-time • $130,000 - $175,000</p>
                <div>
                    <p class="job-status mb-3 bg-blue-200 w-[100px] rounded-sm py-2 text-center">Not Applied</p>
                    <P class="job-description">Build cross-platform mobile applications using React Native. Work on
                        products used by millions of
                        users worldwide.</P>
                </div>
                <div class="mt-5 flex gap-6">
                    <button
                        class="btn border-2 border-green-500 rounded-sm text-green-500 font-semibold">INTERVIEW</button>
                    <button class="btn border-2 border-red-500 rounded-sm text-red-500 font-semibold">REJECTED</button>
                </div>`
    }
}