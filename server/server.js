import { fileServer } from './fileServer';

/* eslint-disable no-process-env */

const port = parseInt(process.env.PORT || 4000, 10);

if (process.env.NODE_ENV === 'develop') {
  fileServer();
} else {
  fileServer(port);
}
