require("dotenv").config();
require("express-async-errors");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const connetDB = require("./database/connect")
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const router = require("./routers/postRouter");
const express = require('express');
const server = express();

const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

const port = process.env.PORT || 5000;

server.set('trust proxy', 1);
server.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 500, // limit each IP to 100 requests per windowMs
  })
);
server.use(express.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(fileUpload());

// server.use(helmet({
//     crossOriginEmbedderPolicy: false,
// 	crossOriginResourcePolicy: false,
//   }));
server.use(cors());
server.use(xss());

server.use((req, res, next) => {
	res.setHeader("Cross-Origin-Resource-Policy", "*");
	next();
})

server.use(express.static("public"))
server.use("/api/post", router);

server.get("/", (req, res) => {
	console.log(req.headers.origin);
	res.send("Hello")
})

server.use(notFound);
server.use(errorHandler);

const startServer = async () => {
	try {
		await connetDB(process.env.MONGO_URI);
		server.listen(port, () => console.log(`Server slusa na portu ${port}`))
	} catch (error) {
		console.error(error);
	}
}

startServer();