﻿import { Request, Response } from 'express';
import { getUsers, createUser } from '../services/userService';

export const getAllUsers = async (req: Request, res: Response) => {
    const users = await getUsers();
    res.json(users);
};

export const addUser = async (req: Request, res: Response) => {
    const user = req.body;
    const newUser = await createUser(user);
    res.status(201).json(newUser);
};