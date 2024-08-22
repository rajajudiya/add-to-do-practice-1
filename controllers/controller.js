

let todoStorage = [];

const defaultController = (req, res) => {
    res.render('index.ejs',{todos: todoStorage});
}
const todoApp = (req, res) => {

    let todoObj = {
        id: todoStorage.length + 1,
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        phoneno: req.body.phoneno,
        password: req.body.password
    }
    todoStorage = [...todoStorage, todoObj];

    console.log(todoObj);

    console.log("Todo");
    res.redirect('/')
}


const editTodoController = (req, res) =>{
    console.log(req.params);
    let {id} = req.params
    
    let singleTodo = todoStorage.find((todo) =>{
        return todo.id == id
    })
    console.log("Single Todo..???", singleTodo);
    
    res.render('volunteer',{singleTodo});    


}

const updateTodo = (req, res) => {

    let { id } = req.params;
    console.log(req.body);

    const updateData = todoStorage.find((todo) => {
        return todo.id = id;
    })

    updateData.fullname = req.body.fullname;
    updateData.username = req.body.username;
    updateData.email = req.body.email;
    updateData.phoneno = req.body.phoneno;
    updateData.password = req.body.password;


    console.log("Update Data", updateData);

    res.redirect('/');
}


module.exports = { defaultController, todoApp, editTodoController,updateTodo };