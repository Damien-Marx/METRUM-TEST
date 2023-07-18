"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const searchRoutes_1 = __importDefault(require("./searchRoutes"));
const seriesRoutes_1 = __importDefault(require("./seriesRoutes"));
const router = express_1.default.Router();
router.use('/search', searchRoutes_1.default);
router.use('/series', seriesRoutes_1.default);
exports.default = router;
