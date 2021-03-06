import express from 'express';
import morgan from 'morgan';
import path from 'path';

const app = express();

app.use(
    morgan(
        ':remote-addr - :remote-user [:date[clf]]' +
        ' ":method :url HTTP/:http-version"' +
        ' :status :res[content-length] :response-time ms'
    )
);

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

export default app;
