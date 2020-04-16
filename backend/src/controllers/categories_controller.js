const categoriesCtrl = {};

const Category = require('../models/Category')

categoriesCtrl.getCategories = async (req, res) => {
    const category = await Category.find();
    res.json(category);
}

categoriesCtrl.createCategories = async (req, res) => {
    const { title, description } = req.body;
    const newCategory = new Category({title, description});
    await newCategory.save();
    res.json('Category created!')
}

categoriesCtrl.getCategory = async (req, res) => {
    const category = await Category.findById(req.params.id);
    res.json(category)
}

categoriesCtrl.updateCategory = async (req, res) => {
    const {title, description} = req.body;
    await Category.findOneAndUpdate({_id: req.params.id}, {
        title,
        description,
    })
    res.json({message: 'Category Updated'}); 
}

categoriesCtrl.deleteCategory = async (req, res) => {
    await Category.findByIdAndDelete(req.params.id);
    res.json({message: 'Category Deleted'}); 
}

module.exports = categoriesCtrl;