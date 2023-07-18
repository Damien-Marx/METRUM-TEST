import express from 'express';
import { searchSeries } from '../controllers/SearchController';

const router = express.Router();

router.get('/', searchSeries);

export default router;
