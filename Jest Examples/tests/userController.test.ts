﻿import app from '../src/app';
import * as userService from '../src/services/userService';
import { User } from '../src/models/user';
const request = require('supertest');

jest.mock('../src/services/userService');

describe('User Controller', () => {
    describe('GET /users', () => {
        it('should return a list of users', async () => {
            const mockUsers: User[] = [{ id: 1, name: 'John Doe', email: 'john@example.com' }];
            (userService.getUsers as jest.Mock).mockResolvedValue(mockUsers);

            const response = await request(app).get('/users');

            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockUsers);
        });
    });

    describe('POST /users', () => {
        it('should create a new user', async () => {
            const newUser: User = { id: 2, name: 'Jane Doe', email: 'jane@example.com' };
            (userService.createUser as jest.Mock).mockResolvedValue(newUser);

            const response = await request(app)
                .post('/users')
                .send(newUser);

            expect(response.status).toBe(201);
            expect(response.body).toEqual(newUser);
        });
    });
});