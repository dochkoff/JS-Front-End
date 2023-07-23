function loadRepos() {
	const username = document.querySelector('#username').value;
	const list = document.querySelector('#repos');

	list.innerHTML = '';

	fetch(`https://api.github.com/users/${username}/repos`)
		.then((res) => res.json())
		.then((repos) => {
			repos.forEach((repo) => {
				const item = document.createElement('li');
				const adress = document.createElement('a');
				adress.setAttribute("href", repo.html_url);
				adress.textContent = `${repo.full_name}`;

				item.appendChild(adress);
				list.appendChild(item);
			});
		})
		.catch((error) => {
			const item = document.createElement('li');
			item.textContent = `Error: ${error.status}`;

			list.appendChild(item);
		});	
}