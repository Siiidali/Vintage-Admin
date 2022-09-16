import { z } from 'zod';

const createProductSchema = z.object({
  id: z.string({
    required_error: 'id is required',
    invalid_type_error: 'id must be a string',
  }),
  title: z.string({
    required_error: 'title is required',
    invalid_type_error: 'title must be a string',
  }),
  price: z.any({
    required_error: 'price is required',
    invalid_type_error: 'price must be a number',
  }),
  quantity: z.number({
    required_error: 'quantity is required',
    invalid_type_error: 'quantity must be a number',
  }),
  categories: z.array(
    z.string({
      required_error: 'categorie is required',
      invalid_type_error: 'categorie  must be a string',
    })
  ),
  colors: z.array(
    z.string({
      required_error: 'color is required',
      invalid_type_error: 'color must be a string',
    })
  ),
  sizes: z.array(
    z.string({
      required_error: 'size is required',
      invalid_type_error: 'size must be a string',
    })
  ),
});

export type createProductInput = z.infer<typeof createProductSchema>;
