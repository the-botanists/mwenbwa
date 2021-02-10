module.exports = function (app) {
    app.get("/game", (request, response) => {
        response.render("../client/app2.js");
    });
};
