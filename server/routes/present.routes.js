import { Router } from 'express';
import * as PresentController from '../controllers/present.controller';

const router = new Router();

// Get all Presents
router.route('/presents').get(PresentController.getPresents);

// Reserve a present by id
router.route('/presents/:id/reserve').put(PresentController.reservePresent);

// Cancel present's reservation by id
router.route('/presents/:id/cancel').put(PresentController.cancelPresentReservation);

export default router;