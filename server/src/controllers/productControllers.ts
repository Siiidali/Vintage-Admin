import { Request, Response } from 'express';
import productServices from '../services/productServices';
import { createProductInput } from '../schemas/productSchema';
import { Product } from '@prisma/client';

// @desc GetProudct
// @route GET /Product
// @access public
const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await productServices.findProductById(id);

    if (!product) {
      return res.status(400).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

// @desc GetProducrs
// @route GET /PRODUCT
// @access public
const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productServices.findAllProducts();
    if (!products.length) {
      return res.status(400).json({ error: 'No product found' });
    }
    res.status(200).json(products);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

// @desc CREATEPRODUCT
// @route POST /PRDUCT
// @access private
const createProduct = async (
  req: Request<{}, {}, createProductInput>,
  res: Response
) => {
  const { id, title, price, quantity, categories, colors, sizes } = req.body;

  try {
    // check duplicate :
    const productDuplicate = await productServices.findProductById(id);
    if (productDuplicate) {
      return res.status(409).json({ error: 'Product already exist' });
    }

    // product object
    const productObject: Product = {
      id,
      title,
      price,
      quantity,
      categories,
      colors,
      sizes,
    };

    // store the user
    const product = await productServices.creatingProduct(productObject);
    res.status(200).json({ product });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

// @desc UPDATEPRODUCT
// @route PATCH /PRDUCT
// @access private
const updateProduct = async (
  req: Request<{}, {}, createProductInput>,
  res: Response
) => {
  const { id, title, price, quantity, categories, colors, sizes } = req.body;

  try {
    const product = await productServices.findProductById(id);
    if (!product) {
      return res.status(400).json({ message: 'Product not found' });
    }

    const updateProductObject = {
      title,
      price,
      quantity,
      categories,
      colors,
      sizes,
    };

    const updatedProduct = await productServices.updatingProduct(
      id,
      updateProductObject
    );

    res.json({ message: `${updatedProduct.title} updated`, updatedProduct });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

// @desc DELETEPRODUCT
// @route DELETE /PRDUCT
// @access private
const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(400).json({ message: 'Product ID Required' });
    }
    const product = await productServices.findProductById(id);
    if (!product) {
      return res.status(400).json({ message: 'Product not found' });
    }

    const deletedProduct = await productServices.deletingProduct(id);
    const reply = `Product ${deletedProduct.title} with ID ${deletedProduct.id} deleted`;
    res.status(200).json(reply);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const productControllers = {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
