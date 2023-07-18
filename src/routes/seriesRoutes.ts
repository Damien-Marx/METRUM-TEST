import express from 'express';
import { getSeriesDetails } from '../controllers/SeriesController';

const router = express.Router();

//route parametrée pour recup l'ID de la serie
router.get('/:seriesId', getSeriesDetails);

export default router;
