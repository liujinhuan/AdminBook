'use strict';

import { booklist } from './book.controller';
import { bookadd } from './book.controller';
import router from 'koa-router';

const book = router();

book.get('/booklist', booklist);
book.post('/bookadd', bookadd);

export default book;
