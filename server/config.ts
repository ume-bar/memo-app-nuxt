import pgPromise from "pg-promise";

const pgp = pgPromise({});
exports.dbConf = [
    {
        host: "127.0.0.1",
        port: 5432,
        database: "memo",
        user: "tatsuhiro",
        password: "md5c1b667c001823253bd0cd8a0e7012f10",
        max: 10, // size of the connection pool
        query_timeout: 60000 // 60sec
    }
]
export const sqlExecuter = pgp(config.db);