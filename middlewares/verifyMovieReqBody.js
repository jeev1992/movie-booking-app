validateMovieRequestBody = async (req, res, next) => {

    //Validate if the movie name is provided - return HTTP 400

    //Validate if releaseStatus is provided - return HTTP 400

    //Validate the releaseStatus of the movie: "RELEASED", "BLOCKED", "UNRELEASED" - return HTTP 400

    //Validate if the releaseDate is provied - return HTTP 400

    //Validate if the director is provided - return HTTP 400

    next();
}

const verifyMovieReqBody = {
    validateMovieRequestBody: validateMovieRequestBody
}

module.exports = verifyMovieReqBody;

