const express = require('express');

app = express();
port = 7865;

app.get('/',(req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Welcome to the payment system');
});
app.get('/cart/:id(\\d+)', (req, res) => {
    const cartId = parseInt(req.params.id);
    if (isNaN(cartId)) {
        return res.status(404);
    }
    res.statusCode = 200;
    res.send(`Payment methods for cart ${cartId}`);
})
app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});

module.exports = app;
