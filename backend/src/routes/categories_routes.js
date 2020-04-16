const { Router } = require('express');
const router = Router();

const { getCategories, createCategories, getCategory, updateCategory, deleteCategory } = require('../controllers/categories_controller');

router.route('/')
    .get(getCategories)
    .post(createCategories);

router.route('/:id')
    .get(getCategory)
    .put(updateCategory)
    .delete(deleteCategory);

module.exports = router;