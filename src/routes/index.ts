import express from 'express';
import searchRoutes from './searchRoutes';
import seriesRoutes from './seriesRoutes';

const router = express.Router();

router.use('/search', searchRoutes);
router.use('/series', seriesRoutes);

export default router;
