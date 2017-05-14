'use strict';

import { loginByPWD } from './login.controller';
import router from 'koa-router';

const login = router();

login.post('/login', loginByPWD);

export default login;
