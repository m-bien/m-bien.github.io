let repos = document.getElementById('repos');
let input = document.getElementById('input');
let searchButton = document.getElementById('search');

// enter github user
searchButton.addEventListener('click', gitHubRepos)

// fetch repos
async function gitHubRepos() {
    try {
        let user = input.value;
        const getRepos = await fetch(`https://api.github.com/users/${user}/repos`);
        const repoData = await getRepos.json();
        repoDetails(repoData);
        /*
        //let commitCount = commitData.length;
        let commitCount;
        const getCommits = await fetch(`https://api.github.com/repos/${user}/${element.name}/commits`);
        const commitData = await getCommits.json();
        //repoDetails(commitData);
        commitCount = commitData.length;
        */
        
    }
    catch (err) {
        console.log(err, 'Cannot fetch data');
    }
}

// print repo details
const repoDetails = (repoData) => {
    const output = repoData.map((element) => {
        return `<div class='box'>

        <i class="fa-brands fa-github fa-xl"></i>
        <div><a href="${element.html_url}"><h3>${element.name}</h3></a></div>
        <div> ${element.description}</div>
        <p>\n\n</p>
        <div> Commits: </div>
        <div> Updated: <b>${new Date(element.updated_at).toLocaleDateString()}</b></div>
        <div> Created: <b>${new Date(element.created_at).toLocaleDateString()}</b></div> 
        <div> Language: <b>${element.language}</b></div>
        <div> Watchers: <b>${element.watchers_count}</b></div>
        </div>`
    })
    repos.innerHTML = output;
}