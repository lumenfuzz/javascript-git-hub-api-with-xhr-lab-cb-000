function showRepositories(event, data) {
  var repos = JSON.parse(this.responseText)
  console.log(repos)
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a>' + ' - <a href="#" data-repo="' + r.name + '" onclick="getBranches(this)">Get Branches</a></li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList
}

function getRepositories() {
  const req = new XMLHttpRequest()
  const username = document.getElementById("username").value
  req.addEventListener("load", showRepositories);
  req.open("GET", `https://api.github.com/users/${username}/repos`)
  req.send()
}

function getCommits(el) {
<<<<<<< HEAD
  const repository = el.dataset.repository
  const req = new XMLHttpRequest()
  const username = document.getElementById("username").value
  req.addEventListener("load", displayCommits)
  req.open("GET", `https://api.github.com/repos/${username}/${repository}/commits`)
=======
  const name = el.dataset.repo
  const req = new XMLHttpRequest()
  const username = document.getElementById("username").value
  req.addEventListener("load", displayCommits)
  req.open("GET", `https://api.github.com/repos/${username}/${name}/commits`)
>>>>>>> 9fb4340af31a0b78cc2c8ce196358476c3bf0333
  req.send()
}

function displayCommits() {
  const commits = JSON.parse(this.responseText)
  const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.author.login + '</strong> - ' + commit.commit.author.name + ' - ' + commit.commit.message + '</li>').join('')}</ul>`
  document.getElementById("details").innerHTML = commitsList
}

<<<<<<< HEAD
/* --- testing function; used to "pry" into repository data
function getThis() {
  return JSON.parse(this.responseText)
}
 --- */

function getBranches(el) {
  const repository = el.dataset.repository
  const req = new XMLHttpRequest()
  const username = document.getElementById("username").value
  req.addEventListener("load", displayBranches)
  req.open("GET", `https://api.github.com/repos/${username}/${repository}/branches`)
}
=======
function getThis() {
  return JSON.parse(this.responseText)
}

function getBranches(el) {
  const name = el.dataset.repo
  const req = new XMLHttpRequest()
  const username = document.getElementById("username").value
  req.addEventListener("load", displayCommits)
  req.open("GET", `https://api.github.com/repos/${username}/${name}/commits`)
>>>>>>> 9fb4340af31a0b78cc2c8ce196358476c3bf0333
  req.send()
}

function displayBranches() {
<<<<<<< HEAD
  const branches = JSON.parse(this.responseText)
  const branchesList = `<ul>${branches.map(branch => '<li><strong>' + branch.name + '</strong>' + '</li>').join('')}</ul>`
  document.getElementById("details").innerHTML = branchesList
}

function displayRepositories() {
  const repos = JSON.parse(this.responseText)
  const reposList = `<ul>${repos.map(repo => '<li><strong>' + repo.name + '</strong> - ' + repo.owner.login + ' - ' + repo.html_url + '</li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = reposList
=======
  const commits = JSON.parse(this.responseText)
  const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.author.login + '</strong> - ' + commit.commit.author.name + ' - ' + commit.commit.message + '</li>').join('')}</ul>`
  document.getElementById("details").innerHTML = commitsList
}

function displayRepositories() {

}

function branchesData() {

}

function reposData() {

>>>>>>> 9fb4340af31a0b78cc2c8ce196358476c3bf0333
}
