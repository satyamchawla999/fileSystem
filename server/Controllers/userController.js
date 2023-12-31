let User = require("../Model/users")
const path = require("path");
const fs = require("fs");

module.exports.checkUser = (req, res) => {
    const { email, password } = req.body;
    try {

        if (!fs.existsSync(path.join(__dirname, "../Data", "/user.json"))) {
            res.statusMessage = "User Not Found";
            res.status(204).end();
        } else {

            console.log(req.body)
            fs.readFile(path.join(__dirname, "../Data", "/user.json"), "utf-8", (err, data) => {
                const users = JSON.parse(data) || [];
                users.forEach((user) => {
                    if (user.email === email && user.password === password) {
                        const userData = {
                            name: user.name,
                            email: user.email
                        }
                        return res.status(200).send(userData);
                    } else {
                        console.log("hehehhe")
                        res.statusMessage = "User Not Found";
                        return res.status(204).end();
                    }
                })
            });
        }

    }
    catch {
        res.statusMessage = "User Not Found";
        return res.status(204).end();
    }
}

module.exports.addUser = (req, res) => {
    const { email } = req.body;

    try {
        if (!fs.existsSync(path.join(__dirname, "../Data", "/user.json"))) {
            fs.writeFile(path.join(__dirname, "../Data", "/user.json"), JSON.stringify([]), (err, data) => {
                console.log("data", data);
            });
        }
        fs.readFile(path.join(__dirname, "../Data", "/user.json"), "utf-8", (err, data) => {
            let users = [];
            if (data) {
                users = JSON.parse(data) || [];
            }
            console.log(users)

            const result = users.some((user) => (user.email === email));
            if (result === true) {
                res.status(204).end();
            } else {
                users.push(req.body);

                fs.writeFile(path.join(__dirname, "../Data", "/user.json"), JSON.stringify(users), (err, data) => {
                    return res.status(200).send();
                });
            }
        });
    }
    catch {
        res.statusMessage = "User Not Found";
        return res.status(204).end();
    }
}

module.exports.signUp = async (req,res) => {
    try {
        let user =  await User.findOne({email: req.body.email});

        if(!user){
            user = await User.create(req.body);
            return res.status(201).send("User Created Successfully!");
        } else {
            res.statusMessage = "User Already Exists";
            return res.status(204).end()
        }

    } catch(err) {
        res.statusMessage = "Unable To Create User";
        return res.status(409).end();
    }
}

module.exports.signIn = async (req,res) => {
    const {email,password} = req.body;
    try {
        let user =  await User.findOne({email: email});

        if(user && user.password === password){
            return res.status(201).send("Sign In Successfull!");
        } else {
            res.statusMessage = "User Not Present";
            return res.status(204).end()
        }

    } catch(err) {
        res.statusMessage = "Unable To Sign In";
        return res.status(401).end();
    }
}