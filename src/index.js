import express from 'express';
import graphqlHTTP from "express-graphql";
import mongoose from "mongoose";
import {schema} from './schema/schema';

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://enfase:enfase&*(@cluster0-etjqi.mongodb.net/quiz", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
const PORT = 4300;

app.get("/", (req, res) => {
    res.json({
        message: "OK"
    });
});

app.use('/graphql', graphqlHTTP({
        schema: schema,
        graphiql: true
    }),
);

app.listen(PORT, () => {
    console.log("Server is listening on PORT ${PORT}");
});