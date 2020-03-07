import express from 'express';
import graphqlHTTP from "express-graphql";
import {schema} from './schema/schema';
import connectDatabase from './database';
import cors from 'cors';

const app = express();
const PORT = 4300;

app.use(cors());

(async () => {
    try {
        const info = await connectDatabase();
        console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
    } catch (error) {
        console.error('Unable to connect to database');
        process.exit(1);
    }

    await app.use('/graphql', graphqlHTTP({
            schema: schema,
            graphiql: true
        }),
    );

    await app.listen(PORT, () => {
        console.log(`Server is listening on PORT ${PORT}`);
    });
})();