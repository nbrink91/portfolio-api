import express, { Request, Response, NextFunction } from 'express';
import { createConnection, Connection, getMongoManager } from 'typeorm';
import bodyParser from 'body-parser';
import Contact from './entity/Contact';

const app = express();

app.use(bodyParser.json());

createConnection().then((connection: Connection) => {
    app.post('/contact', async (req: Request, res: Response, next: NextFunction) => {
        const contact = new Contact();
        contact.name = req.body.name;
        contact.email = req.body.email;
        contact.message = req.body.message;

        await getMongoManager().save(contact);

        res.json(contact);
    });
    
    app.listen(3000, () => console.log("Started the app on port 3000..."));
});
