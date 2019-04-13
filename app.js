import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express()
const port = 3456
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true})

const Blogger = mongoose.model('Blogger', { userName: String });

app.get('/', (req, res) => res.send('Hello World from the blog system!'))

app.post('/bloggers', (req, res) => {
    const blogger = new Blogger({ userName: req.body.userName });

    blogger.save()
        .then(() => res.send('blogger saved'))
        .catch(error => {
            console.log(error);
            res.send('not saved');
        });
})

app.get('/bloggers', (req, res) => {
    const blogger = new Blogger({ userName: req.body.userName });

    blogger.save()
        .then(() => res.send('blogger saved'))
        .catch(error => {
            console.log(error);
            res.send('not saved');
        });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))