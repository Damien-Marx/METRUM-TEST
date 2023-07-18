"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SeriesController_1 = require("../controllers/SeriesController");
const router = express_1.default.Router();
router.get('/:seriesId', SeriesController_1.getSeriesDetails);
exports.default = router;
