const HomeController = {
    index: (req, res) => {

        let info = {
            titulo: "Digital House",
            cursos: ['Full Stack', 'Mobile Andoird', 'Marketing Digital']
        };

        return res.render('index', info);
    }
};

module.exports = HomeController;