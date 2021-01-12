exports.handler =  (event, context, callback) => {
    return callback(null, { statusCode: 200, body: "This is Lambda CICD with Blue/Green demployment"});
};
