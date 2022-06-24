const is_valid_token = (token) => {
    // TODO
    return true;
};

// express middleware, validate a request before moving to the next
const authenticate_req = (req, res, next) => {
    // https://datatracker.ietf.org/doc/html/rfc6750
    // sections 3 and 3.1
    let error = "";
    let ret_code = 400;
    if (!req.headers.authorization) {
        error = "invalid_request";
        ret_code = 400
    } else {
        const [auth_scheme, token, ..._data] = req.headers.authorization.split(' ');
        if (auth_scheme !== "Bearer") {
            error = "invalid_request";
            ret_code = 400;
        } else if (!is_valid_token(token)) {
            error = "invalid_token";
            ret_code = 401;
        } else {
            next();
        }
    }
    if (error !== "") {
        res.set('WWW-Authenticate', `Bearer error="${error}"`);
        res.status(ret_code).send(error);
    }
};

module.exports = {
    authenticate_req
};
