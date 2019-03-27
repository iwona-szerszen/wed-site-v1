import { Router } from 'express';
import * as GuestController from '../controllers/guest.controller';

const router = new Router();

// Get all guests
router.route('/guests').get(GuestController.getGuests);

// Get a guest by id
router.route('/guests/:id').get(GuestController.getGuest);

// Edit a guest by id
router.route('/guests/:id').put(GuestController.editGuest);

export default router;