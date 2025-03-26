fetch("../src/Json/Articles.json")
  .then((res) => res.json())
  .then((data) => {
    data.reverse();
    data.forEach((element) => {
      document.getElementById("AllArticles").innerHTML += `
            <div class="w-full font-mono tracking-wide flex flex-col"><p class="text-gray-400">| ${element.publishDate}</p>
            <p class="text-gray-300 font-semibold my-1 w-10/12">${element.title}</p>
            <p class="text-gray-300 w-10/12">${element.description}</p>
            <a href="${element.fileUrl}" class="text-blue-600 font-semibold my-1" download="${element.title}">Read article ></a>
            </div>
`;
    });
  });
