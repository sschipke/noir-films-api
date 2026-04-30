import '@babel/polyfill';
import app from './app';

const apiKey = process.env.API_KEY

app.set('port', process.env.PORT || 8000);

const port = app.get('port');
const host = '0.0.0.0';
app.listen(port, host, () => {
  console.log(`${app.locals.title} is listening on ${host}:${port}`);
});

