module.exports = function(request, response) {
    let articles = require("../../articles/GET.json");

    let article = articles.find(article => article.id == request.params.article_id);

    response.json({
        id: article.id,
        title: article.title,
        user_id: article.user_id
    });
};