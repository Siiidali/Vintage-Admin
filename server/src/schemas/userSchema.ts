import { z } from 'zod';

const createNewUserSchema = z.object({
  email: z
    .string({
      required_error: 'email is required',
      invalid_type_error: 'email must be a string',
    })
    .email(),
  password: z.string({
    required_error: 'password is required',
    invalid_type_error: 'password must be a string',
  }),
  firstName: z.string({
    required_error: 'fistName is required',
    invalid_type_error: 'fistName must be a string',
  }),
  lastName: z.string({
    required_error: 'lastName is required',
    invalid_type_error: 'lastName must be a string',
  }),
  phone: z.string({
    required_error: 'phone is required',
    invalid_type_error: 'phone must be a string',
  }),
  country: z.string({
    required_error: 'country is required',
    invalid_type_error: 'country must be a string',
  }),
  adresse: z.string({
    required_error: 'adresse is required',
    invalid_type_error: 'adresse must be a string',
  }),
  postalCode: z.string({
    required_error: 'postalCode is required',
    invalid_type_error: 'postalCode must be a string',
  }),
});

export type createUserInput = z.infer<typeof createNewUserSchema>;
