var users = [
    {
        name: 'Preston McNeil',
        password: 'password1',
        friends: ['Lindsey Mayer', 'Terri Ruff']
    },
    {
        name: 'Ryan Rasmussen',
        password: '$akgfl#',
        friends: ['Lindsey Mayer']
    },
    {
        name: 'Terri Ruff',
        password: 'hunter2',
        friends: ['Lindsey Mayer', 'Preston McNeil']
    },
    {
        name: 'Lindsey Mayer',
        password: '777mittens777',
        friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
    }
];


exports.login = function (req, res, next) {
    for (i = 0; i < users.length; i++) {
        if (users[i].name === req.body.name) {
            if (req.body.password === users[i].password) {
                req.session.currentUser = user[i]
                res.send({ userFound: true });
            }

        }
    }
    res.send({ userFound: false })
    return res.status(200).json(user.name)
}