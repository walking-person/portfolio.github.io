document.getElementById('themeToggle').addEventListener('click', function () {
	const currentTheme = document.body.className
	if (currentTheme === 'light-theme') {
		document.body.className = 'dark-theme'
	} else {
		document.body.className = 'light-theme'
	}
})

async function loadTranslations() {
	const response = await fetch('./translation.json')
	return await response.json()
}

function applyTranslations(translations, language) {
	document.querySelector('.about h1').innerText =
		translations[language].aboutTitle
	document.querySelector('.about p').innerText =
		translations[language].aboutText
	document.querySelector('.about a').innerText =
		translations[language].contactLink

	document.querySelector('.projects .projects-title h1').innerText =
		translations[language].projectsTitle
	document.querySelector('.projects .projects-title a').innerText =
		translations[language].projectsSeeAll

	document.querySelectorAll('.projects-card .project-info p').forEach(p => {
		p.innerText = translations[language].projectDescription
	})
	document.querySelectorAll('.projects-card .project-info a').forEach(a => {
		a.innerText = translations[language].buyTemplate
	})

	document.querySelector('.thoughts .thoughts-title h1').innerText =
		translations[language].thoughtsTitle
	document.querySelector('.thoughts .thoughts-title a').innerText =
		translations[language].thoughtsSeeAll
	document.querySelectorAll('.thoughts-card a').forEach(a => {
		a.innerText = translations[language].thoughtsRead
	})

	document.querySelector('.newsletter h1').innerText =
		translations[language].newsletterTitle
	document.querySelector('.newsletter p').innerText =
		translations[language].newsletterText

	document.querySelector('.footer-title h1').innerText =
		translations[language].footerText
	document.querySelectorAll('.footer-navigation ul li a')[0].innerText =
		translations[language].footerHome
	document.querySelectorAll('.footer-navigation ul li a')[1].innerText =
		translations[language].footerProjects
	document.querySelectorAll('.footer-navigation ul li a')[2].innerText =
		translations[language].footerThoughts
	document.querySelectorAll('.footer-navigation ul li a')[3].innerText =
		translations[language].footerContact
}

document.addEventListener('DOMContentLoaded', async () => {
	const translations = await loadTranslations()

	const languageSelect = document.getElementById('language')
	languageSelect.addEventListener('change', event => {
		const selectedLanguage = event.target.value
		applyTranslations(translations, selectedLanguage)
	})

	applyTranslations(translations, languageSelect.value)
})
