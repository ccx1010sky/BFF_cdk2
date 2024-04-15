/* eslint-disable no-use-before-define */
import { Routes } from '@scloud/lambda-api/dist/types';
import { ping } from './routes/ping';
import { test } from './routes/test';
import { getitem } from './routes/getitem';

const routes: Routes = {
  '/api/ping': { GET: ping },
  '/api/ping_cchen': {GET: test},
  '/api/get_item': {GET: getitem},
};

export default routes;
