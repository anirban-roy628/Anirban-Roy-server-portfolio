const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();


app.use(compression({
    level: 6,
    threshold: 1024,
}));

app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: '7d',
    etag: true,
    lastModified: true
}));


const projects = ['Gravitas', 'Typemaster', 'Spaceshooter'];


projects.forEach(project => {
    app.get([`/${project}`, `/${project}/`], (req, res) => {
        res.sendFile(path.join(__dirname, 'public', project.toLowerCase(), 'index.html'));
    });
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

