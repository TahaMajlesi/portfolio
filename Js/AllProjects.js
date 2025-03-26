fetch("../src/Json/Projects.json")
  .then((res) => res.json())
  .then((data) => {
    data.reverse();
    data.forEach((element) => {
      document.getElementById("allProjects").innerHTML += `
        <a href="${element.link}" target="_blank">
        <div class="lg:w-4/12 lg:m-2 my-2 font-mono tracking-wide flex flex-col p-4 hover:bg-white hover:text-black rounded-3xl text-gray-300 transition-colors gap-y-3 h-60" >
              <i class="${element.icon} text-3xl mb-4 me-4"></i>
              <p class=" font-semibold w-10/12 flex text-balance">${element.title}</p>
              <p class=" w-10/12 text-wrap flex">${element.description}</p>
              <a href="${element.link}" class="text-blue-600 font-semibold mt-auto">${element.title}</a>
              </div></a>
        `;
    });
  });
