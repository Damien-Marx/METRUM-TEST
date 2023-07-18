"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SearchController_1 = require("../controllers/SearchController");
const router = express_1.default.Router();
router.get('/', SearchController_1.searchSeries);
exports.default = router;
