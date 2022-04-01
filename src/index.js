const express = require('express');
const exphbs = require('express-handlebars');

const port = 3000;
const app = express();

app.use(
    express.urlencoded(
        { extended: true }
    ),
);

const hbs = exphbs.create({
    partialsDir: ["src/views/partials"],
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use(express.static('public'));

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: "Aprender Node.js",
            category: "JavaScript",
            body: "Teste",
            comments: 4
        },
        {
            title: "Aprender PHP",
            category: "PHP",
            body: "Teste",
            comments: 4
        },
        {
            title: "Aprender Python",
            category: "Python",
            body: "Teste",
            comments: 4
        },
    ]

    res.render("blog", { posts });
});

app.get('/', (req, res) => {

    const user = {
        name: 'Lean',
        surname: 'Ficagna',
        age: 30
    }

    const persons = {1:{nome: "Lean", idade: 32}, 2:{nome: "LLL", idade: 22}}
    // const persons = ["dadsa", "dasdasfgg"];
    res.render('home', {user, persons});
});

app.use(express.json());

app.listen(port, () => console.log(`Server run port ${port}`));