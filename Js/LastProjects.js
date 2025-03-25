fetch("../Json/Projects.json")
    .then((res) => res.json())
    .then((data) => {
        const lastArticles = document.getElementById("lastArticles");
        data.reverse();
        for (let i = 0; i < 3; i++) {
            document.getElementById(
                "lastProjects"
            ).innerHTML += `<div class="w-4/12 font-mono tracking-wide flex flex-col p-4 hover:bg-white hover:text-black rounded-3xl h-64 gap-y-6 text-gray-300 transition-colors ">
            <img src="${data[i].icon}" alt="${data[i].alt}">
            <p class=" font-semibold my-2 w-10/12 text-wrap flex">${data[i].title}</p>
            <p class=" w-10/12 text-wrap flex">${data[i].description}</p>
            <a href="${data[i].link}" class="text-blue-600 font-semibold my-1">${data[i].link}</a>
            </div>`;
        }
    });