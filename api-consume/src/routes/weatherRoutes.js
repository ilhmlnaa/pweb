import express from 'express';
import { getWeatherById, getWeatherBySearch } from '../controllers/weatherController.js';


const router = express.Router();

router.get('/search/:search', getWeatherBySearch);
router.get('/id/:id', getWeatherById);

export default router;