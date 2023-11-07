export default class getLastRepos {
  constructor(username, container) {
    this.username = username;
    this.container = container;
    this.init();
  }

  init() {
    fetch(`https://api.github.com/users/${this.username}/repos?&sort=updated`)
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error("Can't get repositories, user doesn't exist.");
      })
      .then((repos) => {
        this.container.innerHTML = "";
        repos.forEach((repo, index) => {
          if (index >= 4) return;

          const description = repo.description
            ? repo.description
            : `A repository for ${repo.name} `;

          const cardModel = `
         <a
            href="${repo.html_url}"
            target="_blank"
            class="c-grid__card "
          >
            <span class="c-grid__textfield">
              <article class="c-grid__text u-column-container u-gap">
              <h3>${repo.name}</h3>
                <p>${description}</p>
                <footer class="c-grid__footer">
                Main language: ${repo.language}
                </footer>
              </article>
            </span>
             <i class="c-grid__icon devicon-github-original"></i>
          </a>
        `;

          this.container.innerHTML += cardModel;
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
