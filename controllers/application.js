const applicationController = {
    index: (req, res) => {
        res.render("index") //changed from res.send to res.render. For handlebars
    }
}

module.exports = applicationController