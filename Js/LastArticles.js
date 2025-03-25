fetch("../Json/Articles.json")
  .then((res) => res.json())
  .then((data) => {
    data.reverse();
    for (let i = 0; i < 3; i++) {
      document.getElementById(
        "lastArticles"
      ).innerHTML += `<div class="w-full font-mono tracking-wide flex flex-col"><p class="text-gray-400">| ${data[i].publishDate}</p>
            <p class="text-gray-300 font-semibold my-1 w-10/12">${data[i].title}</p>
            <p class="text-gray-300 w-10/12">${data[i].description}</p>
            <a href="${data[i].fileUrl}" class="text-blue-600 font-semibold my-1" download="${data[i].title}">Read article ></a>
            </div>`;
    }
  });
