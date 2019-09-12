import * as path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

import { registerUserApi } from '@/sql/user';

const port = 8080;
const execPath = path.dirname(process.argv[1]);
const publicPath = path.resolve(execPath, '../public');

// Qiita
const courses = [
    { id: 1, name: 'computer science'},
    { id: 2, name: 'information technology'},
    { id: 3, name: 'business intelligence'},
];

export async function initServer() {
    const server = express();
    // json読み込み
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());
    server.use(express.static(publicPath));
    server.listen(port);
    console.log('ENV_LOG:', `http://localhost:${port} --> ${publicPath}`);

    await registerUserApi(server);
}
