import {authenticate_req} from './auth';

const express = require('express');
const router = express.Router();

// Don't run authenticate before a login request
router.post("/login", (req, res) => {
    // TODO
})

router.use(authenticate_req);

router.get('/stats', (req, res) => {
    // TODO
})

router.get('/floor/:floorNumber', (req, res) => {
    // TODO
})

router.post('/room/:roomNumber/take', (req, res) => {
    // TODO
});

router.post('/room/:roomNumber/apply', (req, res) => {
    // TODO
});

router.post('/room/:roomNumber/accept', (req, res) => {
    // TODO
});

export default router;
