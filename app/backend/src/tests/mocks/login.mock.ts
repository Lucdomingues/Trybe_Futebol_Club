import 'dotenv/config';

const secretMock = process.env.JWT_SECRET || 'seusecretdetoken';

const tokenMock = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6NSwiZW1haWwiOiJsdWNhc0Boby5jb20iLCJyb2xlIjoidXNlciJ9LCJpYXQiOjE2ODA2NDgzNDYsImV4cCI6MTY4MTI1MzE0Nn0.2zVs2cZflZsJTy9WCAL6tGcziNZFFjYvysbhrKVkniQ'

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

const loginMocks = { userMock, loginMock, usersMock, tokenMock, secretMock }

export default loginMocks;