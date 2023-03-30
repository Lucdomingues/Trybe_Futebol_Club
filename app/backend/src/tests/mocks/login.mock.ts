import 'dotenv/config';
import * as jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const loginMock = {
    "id": 1,
    "username": "Test",
    "role": "admin",
    "email": "test@mock.com",
    "password": "123456",
}

const tokenMock = jwt.sign(
    {
        data: {
            userId: loginMock.id,
        },
    },
    secret,
    {
        expiresIn: '7d', algorithm: 'HS256',
    },
)

const loginMocks = {tokenMock, loginMock}

export default loginMocks;