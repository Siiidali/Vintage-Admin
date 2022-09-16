import { Request, Response } from 'express';
import userServices from '../services/userServices';
import { createUserInput, updateUserInput } from '../schemas/userSchema';
import { hashPassword } from '../utils/hashPassword';
// @desc GetUser
// @route GET /User
// @access private
const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await userServices.findUserById(id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

// @desc GetUsers
// @route GET /User
// @access private
const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userServices.findAllUsers();
    if (!users.length) {
      return res.status(400).json({ error: 'No users found' });
    }
    res.status(200).json(users);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

// @desc CreateUser
// @route POST /User
// @access private
const createUser = async (
  req: Request<{}, {}, createUserInput>,
  res: Response
) => {
  const {
    email,
    password,
    firstName,
    lastName,
    phone,
    country,
    adresse,
    postalCode,
  } = req.body;

  try {
    // check duplicate :
    const userDuplicate = await userServices.findUserByEmail(email);
    if (userDuplicate) {
      return res.status(409).json({ error: 'Email already in use' });
    }

    // hashing the password
    const hashedPassword = await hashPassword(password);

    // user object
    const userObject = {
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phone,
      country,
      adresse,
      postalCode,
    };

    // store the user
    const user = await userServices.createNewUser(userObject);
    res.status(200).json({ user });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

// @desc UpdateUser
// @route PATCH/User
// @access private
const updateUser = async (
  req: Request<{}, {}, updateUserInput>,
  res: Response
) => {
  const {
    id,
    email,
    password,
    firstName,
    lastName,
    phone,
    country,
    adresse,
    postalCode,
  } = req.body;

  try {
    const user = await userServices.findUserById(id);
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }
    // check for duplicate emails:
    const duplicate = await userServices.findUserByEmail(email);
    if (duplicate && duplicate?.id !== id) {
      return res.status(409).json({ message: 'Email already in use' });
    }
    const updateUserObject = {
      email,
      firstName,
      lastName,
      phone,
      country,
      adresse,
      postalCode,
    };
    let updatedUser;
    updatedUser = await userServices.updatingUser(email, updateUserObject);
    if (password) {
      updatedUser = await userServices.updatingUser(email, password);
    }

    res.json({ message: `${updatedUser.firstName} updated`, updatedUser });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

// @desc DeleteUser
// @route DELETE /User
// @access private
const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(400).json({ message: 'User ID Required' });
    }
    const user = await userServices.findUserById(id);
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const deleteUser = await userServices.deletingUser(id);
    const reply = `Username ${deleteUser.firstName} with ID ${deleteUser.id} deleted`;
    res.status(200).json(reply);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const userControllers = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
