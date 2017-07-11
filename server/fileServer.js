import { apiServer } from './apiServer';
import fallback from 'express-history-api-fallback'
import express from 'express';
import path from 'path';

const _root = path.resolve(__dirname, '..');

function root(...args) {
  return path.join.apply(path, [_root].concat(args));
}

export const fileServer = (port = 3030) => {
  const app = express();
  const staticPath = root('build');
  
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  app.use('/api', apiServer());
  app.use(express.static(staticPath));
  app.use(fallback('index.html', { root: staticPath }));

  app.listen(port, () => {
    // eslint-disable-next-line
    console.log('File server listening on port %d', port);
  });
};
