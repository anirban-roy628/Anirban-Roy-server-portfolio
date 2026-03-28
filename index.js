const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();

app.use(compression());


app.use(express.static(path.join(__dirname, 'public')));


app.get('/gravitas', (req, res) => res.redirect('/gravitas/'));
app.get('/spaceshooter', (req, res) => res.redirect('/spaceshooter/'));
app.get('/typemaster', (req, res) => res.redirect('/typemaster/'));


app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public/404.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

