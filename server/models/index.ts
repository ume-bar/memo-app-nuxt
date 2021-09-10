import express, { Request, Response } from "express";
import nuxt from "@nuxt/types";
 
const dev = process.env.NODE_ENV !== "production";
const app = Nuxt({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;
 
app.prepare().then(() => {
	const server = express();
 
	server.all("*", (req: Request, res: Response) => {
		return handle(req, res);
	});
	server.listen(port, (err?: any) => {
		if (err) throw err;
		console.log(
                      `> Ready on localhost:${port} - env ${process.env.NODE_ENV}`
                );
	});
});
// const dbConf =  require('../config.js').dbConf
// const { Pool } = require('pg')
// const dbNum = dbConf.length
// var pool = []
// for (let i = 0; i < dbNum; i ++) {
//     pool[i] = new Pool(dbConf[i])
// }
// module.exports = { pool, dbConf }