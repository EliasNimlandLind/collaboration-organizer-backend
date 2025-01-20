import { v4 as uuidv4 } from 'uuid';
import express from 'express';

export const router = express.Router();

const articles = [
	{
		id: uuidv4(),
		title: 'Inte klart med ersättare för Ribbenvik',
		summary:
			'▸ Regeringen och SD har ännu inte hittat någon ersättare för Migrationsverkets avgående generaldirektör Mikael Ribbenvik.',
		link: 'https://www.aftonbladet.se/nyheter/a/8JWWL2/inte-klart-med-ersattare-for-ribbenvik',
		published: new Date(Date.now()),
		topic: ['SamhalleKonflikter'],
		author: 'Johan Johnson',
	},
];

const sortArticles = (articles, sortBy) => {
	return articles.sort((firstArticle, secondArticle) => {
		switch (sortBy) {
			case 'newest':
				return (
					new Date(secondArticle.published) - new Date(firstArticle.published)
				);

			case 'oldest':
				return (
					new Date(firstArticle.published) - new Date(secondArticle.published)
				);

			case 'author-ascending':
				const firstAuthorAscending = firstArticle.author.toLowerCase();
				const secondAuthorAscending = secondArticle.author.toLowerCase();
				return firstAuthorAscending.localeCompare(secondAuthorAscending);

			case 'author-descending':
				const firstAuthorDescending = firstArticle.author.toLowerCase();
				const secondAuthorDescending = secondArticle.author.toLowerCase();
				return secondAuthorDescending.localeCompare(firstAuthorDescending);

			default:
				return articles;
		}
	});
};

router.post('/api/documents', async (request, response) => {
	let filteredArticles = articles;
	const { topic, sortBy } = request.query;

	if (topic) {
		filteredArticles = filteredArticles.filter((article) =>
			article.topic.includes(topic)
		);
	}

	filteredArticles = sortArticles(filteredArticles, sortBy);
	response.json(filteredArticles);
});

router.get('/api/articles', async (request, response) => {
	let filteredArticles = articles;
	const { topic, sortBy } = request.query;

	if (topic) {
		filteredArticles = filteredArticles.filter((article) =>
			article.topic.includes(topic)
		);
	}

	filteredArticles = sortArticles(filteredArticles, sortBy);
	response.json(filteredArticles);
});

export default router;
