const fs = require('fs');
const path = require('path');

const UsersData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data.json'), 'utf-8'));

exports.getAllUsers = (req, res) =>
{
    res.status(200).json({
        status: "success",
        data: {
            users: UsersData.users
        }
    });
};

exports.createUser = (req, res) =>
{
    const new_id = UsersData.users.length + 1;
    const new_user = Object.assign(req.body, {id: new_id});
    const _exists = UsersData.users.find(user => user.email === new_user.email);
    if (_exists)
    {
        res.status(400).json({
            status: "fail",
            message: "this email is in use"
        });
    } else
    {
        UsersData.users.push(new_user);

        fs.writeFileSync(path.join(__dirname, '../data.json'), JSON.stringify({
            users: UsersData.users,
            tours: UsersData.tours
        }, null, 2));
        res.status(200).json({
            status: "success",
            message: "user has been added"
        });
    }
};

exports.getUserByID = (req, res) =>
{
    const id = parseInt(req.params.id, 10);
    const user = UsersData.users.find(user_ => id === user_.id);
    if (user)
    {
        res.status(200).json({
            status: "success",
            data: {
                user
            }
        });
    } else
    {
        res.status(400).json({
            status: "fail",
            message: "id doesn't exist"
        });
    }
};

exports.updateUser = (req, res) =>
{
    const id = parseInt(req.params.id, 10);
    const user = UsersData.users.find(user_ => id === user_.id);
    if (user)
    {
        const email_existance = UsersData.users.find(_user => req.body.email === _user.email && _user.id !== id);
        if (email_existance)
        {
            res.status(400).json({
                status: "fail",
                message: "this email is in use"
            });
        } else
        {
            user.name = req.body.name;
            user.email = req.body.email;

            fs.writeFileSync(path.join(__dirname, '../data.json'), JSON.stringify({
                users: UsersData.users,
                tours: UsersData.tours
            }, null, 2));

            res.status(200).json({
                status: "success",
                message: "user updated successfully"
            });
        }
    } else
    {
        res.status(400).json({
            status: "fail",
            message: "id doesn't exist"
        });
    }
};
exports.deleteUser = (req, res) =>
{
    const id = parseInt(req.params.id, 10);
    const userIndex = UsersData.users.findIndex(user_ => id === user_.id);
    if (userIndex !== -1)
    {
        UsersData.users.splice(userIndex, 1);

        fs.writeFileSync(path.join(__dirname, '../data.json'), JSON.stringify({
            users: UsersData.users,
            tours: UsersData.tours
        }, null, 2));

        res.status(200).json({
            status: "success",
            message: "user deleted successfully"
        });
    } else
    {
        res.status(400).json({
            status: "fail",
            message: "id doesn't exist"
        });
    }
};