'use strict';

import { userlist } from './user.controller';
import { useradd } from './user.controller';
import { userupdate } from './user.controller';
import { userdelete } from './user.controller';


import router from 'koa-router';

const user = router();

user.get('/userlist', userlist);
user.post('/useradd', useradd);
user.post('/userupdate', userupdate);
user.post('/userdelete', userdelete);

export default user;
