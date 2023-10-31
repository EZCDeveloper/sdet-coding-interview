import axios from 'axios';
import expect from 'expect';

const BASE_URL = 'https://fakestoreapi.com';

require('dotenv').config();

async function testApi() {
  const res = await axios.post(BASE_URL + '/auth/login', {
    username: 'mor_2314',
    password: '83r5^_',
  });
  console.log(res.data.token);

  expect(res.status).toEqual(200);
}

testApi();
