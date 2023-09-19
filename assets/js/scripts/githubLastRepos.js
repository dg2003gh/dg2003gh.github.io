import { Octokit } from "https://esm.sh/octokit";

const TOKEN = "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";

const octokit = new Octokit({
  auth: TOKEN,
});

async function getRepositories() {
  const requestRepos = await octokit.request("GET /users/dg2003gh/repos");

  if (requestRepos.status != 0 || 404) {
    if (requestRepos.status != 422) {
      return requestRepos.data;
    } else {
      console.error("ERROR ! Validation failed", requestRepos);
    }
  } else {
    console.error("ERROR ! Repositories request failed, error", requestRepos);
  }
}

async function getREADMEFile(index) {
  let repos = await getRepositories();
  const requestREADMEFile = await octokit.request(
    `GET /repos/dg2003gh/${repos[index].name}/readme`,
    {
      headers: { Accept: "application/vnd.github.html" },
    }
  );

  if (requestREADMEFile.status != 0 || 404) {
    if (requestREADMEFile.status != 422) {
      return requestREADMEFile.data;
    } else {
      console.error("ERROR ! Validation failed", requestREADMEFile);
    }
  } else {
    console.error(
      "ERROR ! README.md file request failed, error",
      requestREADMEFile
    );
  }
}

//javascript:(function(){var s='https://raw.githubusercontent.com/skratchdot/github-enhancement-suite/master/build/github-enhancement-suite.user.js",
//t='text/javascript',d=document,n=navigator,e;(e=d.createElement('script')).src=s;e.type=t;d.getElementsByTagName('head')[0].
//appendChild(e)})();doIt('');void('')

async function setProjectMiniature(index) {
  const image = document.querySelector("#js-first-project__img");
  const card = document.querySelector("#js-first-project__card");
  let repos = await getRepositories();

  let miniature = `https://github.com/dg2003gh/${repos[index].name}/raw/main/`,
    t = "png";
  if (miniature.status != 0 || 404) {
    image.src = miniature;
  } else {
    card.innerHTML = '<i class="c-grid__icon  devicon-github-original"></i>';
  }
}

async function setRepositoryInfo(projectID, projectDescriptionID, index) {
  let project = document.querySelector(`#${projectID}`);
  let description = document.querySelector(`#${projectDescriptionID}`);
  let repos = await getRepositories();
  let readmeFile = await getREADMEFile(index);

  description.innerHTML = repos[index].description;
  project.innerHTML = `

  <main>
        ${readmeFile} 
        <i>Main Language: ${repos[index].language}</i>
    </main>
  <footer>
  <a href="${repos[index].html_url}">GitHub Link<a>
  </footer>
  
   `;

  setProjectMiniature(index);
}

setRepositoryInfo("js-first-project", "js-first-project-description", 1);
