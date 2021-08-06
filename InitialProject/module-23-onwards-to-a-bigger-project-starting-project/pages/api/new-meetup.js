//api/new-meetup
import { MongoClient } from 'mongodb';

async function handler(req, res) {
    console.log(req.method);
    if (req.method === 'POST') {
        const data = req.body;
        console.log('DATA', data);
        try {
            const { title, image, address, description } = data;
            const client = await MongoClient.connect('mongodb+srv://next:teste@cluster0.mhbpd.mongodb.net/meetups?retryWrites=true&w=majority');
            const db = client.db();
            const meetupsCollection = db.collection('meetups');
            const result = await meetupsCollection.insertOne({ data });

            console.log(result);
            console.log(res);
            return res.status(201).json({ message: 'meetup inserted', result });
        } catch (err) {
            console.log(err);
            return err.message;
        }
    }
}

export default handler;