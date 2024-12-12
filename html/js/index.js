const featuredArticlesHeading = document.querySelector('.featured-articles h2');
const articleList = document.querySelector('.article-list');

featuredArticlesHeading.addEventListener('click', () => {
  articleList.classList.toggle('hidden');
});