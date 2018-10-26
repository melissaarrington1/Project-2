const applicationController = {
    index: (req, res) => {
        res.render("app/index") //changed from res.send to res.render. For handlebars
    }
}

module.exports = applicationController