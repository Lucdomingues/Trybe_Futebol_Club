import 'dotenv/config';

const secretMock = process.env.JWT_SECRET || 'seusecretdetoken';

const tokenMock = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6NSwiZW1haWwiOiJsdWNhc0Boby5jb20iLCJyb2xlIjoidXNlciJ9LCJpYXQiOjE2ODA2NDgzNDYsImV4cCI6MTY4MTI1MzE0Nn0.2zVs2cZflZsJTy9WCAL6tGcziNZFFjYvysbhrKVkniQ'

export const userMockAdm = {
    username: 'Admin',
    role: 'admin',
    email: 'admin@admin.com',
    password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
    // senha: secret_admin
};

export const tokenMockAdm = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhVmFsdWVzIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyJ9LCJfcHJldmlvdXNEYXRhVmFsdWVzIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyJ9LCJ1bmlxbm8iOjEsIl9jaGFuZ2VkIjp7fSwiX29wdGlvbnMiOnsiaXNOZXdSZWNvcmQiOmZhbHNlLCJfc2NoZW1hIjpudWxsLCJfc2NoZW1hRGVsaW1pdGVyIjoiIiwicmF3Ijp0cnVlLCJhdHRyaWJ1dGVzIjpbImlkIiwidXNlcm5hbWUiLCJyb2xlIiwiZW1haWwiLCJwYXNzd29yZCJdfSwiaXNOZXdSZWNvcmQiOmZhbHNlLCJpYXQiOjE2ODA2OTA5OTh9.rTGCS4W2xR58Ml74avv4KG5RQoujB4-wKIxSIhlxJLo';


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

const loginMocks = { userMock, loginMock, usersMock, tokenMock, secretMock, userMockAdm, tokenMockAdm }

export default loginMocks;