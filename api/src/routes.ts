/* eslint-disable no-use-before-define */
import { Routes } from '@scloud/lambda-api/dist/types';
import { ping } from './routes/ping';
import { test } from './routes/test';

const routes: Routes = {
  '/api/ping': { GET: ping },
  '/api/ping_cchen': {GET: test},
};

export default routes;
