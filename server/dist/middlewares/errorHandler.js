"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorGlobalHandler = (err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({ message: "Something went wrong" });
};
exports.default = errorGlobalHandler;
