import { Express } from 'express';
import * as mysql from 'mysql';

const client = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'test002'
});

const query = async (options: string, values?: any) => {
    return await new Promise<any>((resolve, reject) => {
        const callback: mysql.queryCallback = (e, r, f) => {
            if (e) { reject(e); return; }
            resolve(r);
        };

        if (values) {
            client.query(options, values, callback);
        } else {
            client.query(options, callback);
        }
    });
}

export async function registerUserApi(server: Express) {
    server.get('/api/users', async (req, res, next) => {
        const result = await query('SELECT * FROM user;');
        res.send(result);
    });

    server.get('/api/users/:id', async (req, res, next) => {
        const id = req.params.id;
        const result = (await query('SELECT * FROM user WHERE id = ? LIMIT 1;', [ id ]))[0];
        res.send(result);
    });

    server.post('/api/users', async (req, res) => {
        const user = {
            name: req.body.name,
        };

        const result = await query('INSERT INTO user SET ?;', user);
        const inserted = (await query('SELECT * FROM user WHERE id = ? LIMIT 1;', [ result.insertedId ]))[0];
        res.send(inserted);
    });

    server.put('/api/users/:id' , async (req, res) => {
        const id = req.params.id;
        const user = {
            name: req.body.name,
        };

        await query('UPDATE user SET ? WHERE id = ?;', [ user, id ]);
        const result = (await query('SELECT * FROM user WHERE id = ? LIMIT 1;', [ id ]))[0];
        res.send(result);
    });

    server.delete('/api/users/:id' , async (req, res) => {
        const id = req.params.id;
        // delete実行時にデータが消えてしまう為、下記のコード
        const result = (await query('SELECT * FROM user WHERE id = ? LIMIT 1;', [ id ]))[0];
        await query('DElETE FROM user WHERE id = ?;', [ id ]);
        res.send(result);
    });
}
