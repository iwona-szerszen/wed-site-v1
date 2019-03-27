import { Router } from 'express';
import * as DedicationController from '../controllers/dedication.controller';

const router = new Router();

// Get all Dedications
router.route('/dedications').get(DedicationController.getDedications);

// Add a new dedication
router.route('/dedications').post(DedicationController.addDedication);

// Delete a dedication by id
router.route('/dedications/:id').delete(DedicationController.deleteDedication);

export default router;