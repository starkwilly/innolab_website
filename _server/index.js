const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router(__dirname + "/db.json");

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());
server.use(cors());

const SECRET_KEY = "123456789";

const expiresIn = "1h";

// Create a token from a payload
function createToken(payload) {
    return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verify the token
function verifyToken(token) {
    return jwt.verify(token, SECRET_KEY, (err, decode) =>
        decode !== undefined ? decode : err
    );
}

// Get Access Token
server.get("/auth/token", function (req, res) {
    const claims = req.headers.claims;
    const claimsInfo = claims.split("&").reduce((accum, x) => {
        const kv = x.split("=");
        return { ...accum, ...{ [kv[0]]: kv[1] } };
    }, {});
    const access_token = createToken({
        username: claimsInfo.username,
        firstname: claimsInfo.firstname,
        lastname: claimsInfo.lastname,
        emailaddress: claimsInfo.emailaddress,
    });
    res.status(200).json({ access_token });
});

server.post("/api/authenticate", function (req, res) {
    if (
        req.headers.authorization === undefined ||
        req.headers.authorization.split(" ")[0] !== "Bearer"
    ) {
        const status = 401;
        const message = "Error in authorization format";
        res.status(status).json({ status, message });
        return;
    }
    const decoded = verifyToken(req.headers.authorization.split(" ")[1]);
    if (decoded instanceof Error) {
        const status = 401;
        const message = "Access token not provided";
        res.status(status).json({ status, message });
        return;
    } else {
        res.status(200).json(decoded);
    }
});

server.use(/^(?!\/auth).*$/, (req, res, next) => {
    if (
        req.headers.authorization === undefined ||
        req.headers.authorization.split(" ")[0] !== "Bearer"
    ) {
        const status = 401;
        const message = "Error in authorization format";
        res.status(status).json({ status, message });
        return;
    }
    try {
        let verifyTokenResult;
        verifyTokenResult = verifyToken(
            req.headers.authorization.split(" ")[1]
        );

        if (verifyTokenResult instanceof Error) {
            const status = 401;
            const message = "Access token not provided";
            res.status(status).json({ status, message });
            return;
        }
        next();
    } catch (err) {
        const status = 401;
        const message = "Error access_token is revoked";
        res.status(status).json({ status, message });
    }
});

server.use(router);

server.listen(3001, function () {
    console.log("Server app listening at http://localhost:3001");
});
