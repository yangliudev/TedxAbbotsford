const express = require('express');

const app = express();

app.get('/musician', (req, res) => {
    const musicians = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Mary', lastName: 'Goe'},
        {id: 3, firstName: 'Dame', lastName: 'Dalla'},
    ];
    res.json(musicians);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));