fetch("../Json/Projects.json")
  .then((res) => res.json())
  .then((data) => {
    data.reverse();
    for (let i = 0; i < 3; i++) {
      document.getElementById("lastProjects").innerHTML += `
      <a href="${data[i].link}" target="_blank">
      <div class="lg:w-4/12 lg:m-0 my-1 font-mono tracking-wide flex flex-col p-4 hover:bg-white hover:text-black rounded-3xl text-gray-300 transition-colors gap-y-3" >
            <i class="${data[i].icon} text-3xl mb-4 me-4"></i>
            <p class=" font-semibold w-10/12 flex text-balance">${data[i].title}</p>
            <p class=" w-10/12 text-wrap flex">${data[i].description}</p>
            <a href="${data[i].link}" class="text-blue-600 font-semibold mt-auto">${data[i].title}</a>
            </div></a>
      `;
    }
  });
