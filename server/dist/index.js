"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = __importDefault(require("./middlewares/middleware"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
const noteRoutes_1 = __importDefault(require("./routes/noteRoutes"));
const app = (0, express_1.default)();
// Middlewares
(0, middleware_1.default)(app);
// Routes
app.use("/", noteRoutes_1.default);
// Global error handling
app.use(errorHandler_1.default);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
