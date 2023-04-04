import 'dotenv/config';
import * as jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const loginMock = {
    email: 'test@mock.com',
    password: '123456',
}

const userMock = {
    "id": 1,
    "username": "Test",
    "role": "admin",
    "email": "test@mock.com",
    "password": "123456",
}

const usersMock = [{
    "id": 1,
    "username": "Test",
    "role": "admin",
    "email": "test@mock.com",
    "password": "123456",
},
    {
        "id": 2,
        "username": "Test2",
        "role": "user",
        "email": "test@mock2.com",
        "password": "1234567",
    }
]

const loginMocks = { userMock, loginMock, usersMock }

export default loginMocks;