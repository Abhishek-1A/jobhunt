class errorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode=statusCode;
    }
}

export const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal server error";
    err.statusCode = err.statusCode || 500;

    if(err.name === "CaseError") {
        const message=`Resource not found. Invalid ${err.path}`;
        err=new errorHandler(message,400);
    }
    if(err.code === 11000) {
        const message=`Duplicate ${Object.keys(err.keyValue)} Entered`;
        err=new errorHandler(message,400);
    }
    if(err.name === "JsonWebTokenError") {
        const message=`json web token is invalid, try Again.`;
        err=new errorHandler(message,400);
    }
    if(err.name === "TokenExpiredError") {
        const message=`json web token is invalid, try Again.`;
        err=new errorHandler(message,400);
    }
    return res.status(statusCode).json({
        success:false,
        message: err.message,
    });
};

export default errorHandler;