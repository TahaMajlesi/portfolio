fetch("../Json/Projects.json")
    .then((res) => res.json())
    .then((data) => {
        const lastArticles = document.getElementById("lastArticles");
        data.reverse();
        for (let i = 0; i < 3; i++) {
            document.getElementById(
                "lastProjects"
            ).innerHTML += `<div class="w-4/12 font-mono tracking-wide flex flex-col p-4 hover:bg-white hover:text-black rounded-3xl text-gray-300 transition-colors gap-y-3">
            <i class="${data[i].icon} text-3xl"></i>
            <p class=" font-semibold w-10/12 flex text-balance">${data[i].title}</p>
            <p class=" w-10/12 text-wrap flex">${data[i].description}</p>
            <a href="${data[i].link}" class="text-blue-600 font-semibold mt-auto">${data[i].title}</a>
            </div>`;
        }
    });