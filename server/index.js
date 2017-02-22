import app from './app';

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log('Server listening on http://127.0.0.1:' + PORT);
});
