const express = require('express');
const router = express.Router();

const feedbackController = require('../../controllers/web/feedbackController');
// Route to create a new feedback
router.post('/insert', feedbackController.feedbackInsert);
router.get('/view', feedbackController.feedbackView);
router.delete('/delete/:id', feedbackController.feedbackDelete);
router.put('/update/:id', feedbackController.feedbackUpdate);

module.exports = router;