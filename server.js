const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const fs = require("fs");
app.use(bodyParser.urlencoded({ extended: false }));
// Khai bao 1 engine moi ten la handlebars tu defaultLayout: 'main'

app.get("/", (req, res) => {

    let questions = [];
    try {
        questions = JSON.parse(fs.readFileSync("database.json"))
    } catch (error) {
        // console.log(error);
    }
    if(questions.length === 0){
        res.send("Question list is empty")
    } else {
        const index = Math.floor(Math.random()*questions.length);
        const randomQuestion = questions[index];
        res.send(`
            <h1>${randomQuestion.content}</h1>
            <form action="/vote/${randomQuestion.id}" method="POST">
                <button name="vote" value="no">Sai</button>
                <button name="vote" value="yes">Dung</button> 
            </form>        
        `)
    }
    // res.sendFile(__dirname + "/views/answer.html")
});

app.post("/vote/:id", (req, res) => {
    let vote = req.body.vote;
    let id = req.params.id;
    const questions = JSON.parse(fs.readFileSync("./database.json", { encoding:'utf-8' }));
    questions.forEach((question, index)=> {
        if(question.id == id){
            if(vote == 'yes'){
                question[index].yes++;
            }
            else if(vote == 'no'){
                question[index].no ++;
            }
        }
    });
    fs.writeFileSync("./questionAsk.json",JSON.stringify(questions)); // ghi vào 
    res.redirect("/ask")
})

app.get("/question/:id", (req, res) => {
    let id = req.params.id;
    const questions = JSON.parse(fs.readFileSync("./database.json", { encoding:'utf-8' }));
    questions.forEach((item, index) => {
        if(item.id == id){
            yes = questions[index].yes;
            no = questions[index].no;  
            yesPercent = Number(Number((yes * 100) / (yes + no)).toFixed(2)),
            noPercent = 100 - yesPercent;   
            res.send(`
            <h1>  ${questions.content}  </h1>
            <h4> ${yes + no} votes </h4>
            <p> YES:  ${ yesPercent } %  ------------  NO:  ${ noPercent } % </p>
            <button>Summary</button>
        `);
        }
    })
  



});

app.get("/ask", (req, res) => {
    res.sendFile(__dirname + "/views/ask.html")
});

app.post("/addquestion", (req, res) => {
    console.log("Add new question");
    console.log(req.body);
    // let arr = {}
    const { questionContent } = req.body;
    // const questions = fs.readFileSync("database.json");
    // console.log(JSON.parse(question));
    let questions = [];
    try {
        questions = JSON.parse(fs.readFileSync("database.json"))
    } catch (error) {
        console.log(error);
    }
    console.log(questions);
    const newQuestion = {
        id : questions.length,
        content: questionContent,
        yes: 0,
        no: 0
    }
    questions.push(newQuestion);
    fs.writeFileSync("database.json", JSON.stringify(questions))   
    res.redirect("/")
});


app.listen("6699", function(err){
    if(err) console.log(err)
    else console.log("Server start success 1!!!");
});