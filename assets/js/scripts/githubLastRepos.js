import { Octokit } from "https://esm.sh/octokit";

const TOKEN =
  "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";

const octokit = new Octokit({
  auth: TOKEN,
});

async function getRepositoryInfo(index) {
  const requestRepos = await octokit.request("GET /users/dg2003gh/repos");
  const repos = requestRepos.data;
  const requestREADMEFile = await octokit.request(
    `GET /repos/dg2003gh/${repos[index].name}/readme`,
    {
      headers: { Accept: "application/vnd.github.html" },
    }
  );
  const firstProject = document.querySelector("#js-first-project");
  const description = document.querySelector("#js-first-project-description");
  const image = document.querySelector("#js-first-project__img");

  console.log(requestREADMEFile);
  image.src = `https://github.com/dg2003gh/${repos[index].name}/raw/main/screenshots/portfolio_miniature.png`;
  description.innerHTML = repos[index].description;
  firstProject.innerHTML = `<h1>${repos[index].name}</h1>
  <p>${requestREADMEFile.data.html}</p>
  <i>Main Language: ${repos[index].language}</i>
    <a href="${repos[index].html_url}">GitHub Link<a> `;
}

getRepositoryInfo(1);
