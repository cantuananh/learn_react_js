module.exports = (req, res) => {
    let articles = require("../GET.json")

    const id = parseInt(req.params.id);
    const index = articles.findIndex(article => article.id === id);
    if (index !== -1) {
        articles.splice(index, 1);
        return res.status(200).json(articles);
    } else {
        return res.status(404).json({ message: 'Article not found' });
    }
};