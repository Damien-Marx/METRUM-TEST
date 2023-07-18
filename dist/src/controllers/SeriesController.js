"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeriesDetails = void 0;
//Import du module fetch pour les requette a l'API 
const node_fetch_1 = __importDefault(require("node-fetch"));
//export des données des infos de la serie en fonction de l'ID 
const getSeriesDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { seriesId } = req.params;
    try {
        const response = yield (0, node_fetch_1.default)(` https://api.tvmaze.com/shows/${seriesId}`);
        const seriesDetails = yield response.json();
        res.json(seriesDetails);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});
exports.getSeriesDetails = getSeriesDetails;
