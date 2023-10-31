import axios from 'axios';
import expect from 'expect';

require('dotenv').config();

async function testApi() {
  const BASE_URL = process.env.BASE_URL;
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;

  const res = await axios.post(`${BASE_URL}/auth/login`, {
    username,
    password,
  });

  console.log(res.data.token);
  expect(res.status).toEqual(200);
}

testApi();
