import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method !== 'POST') return;

  const { email, name, message } = req.body;

  console.log(req.body);

  //validation
  if (
    !email ||
    !email.includes('@') ||
    !name ||
    name.trim() === '' ||
    !message ||
    message.trim() === ''
  ) {
    res.status(422).json({ message: 'Invalid input.' });
    return;
  }

  //store data in a db
  const newMessage = {
    email,
    name,
    message,
  };

  const dbURL = `mongodb+srv://${process.env.mongo_user}:${process.env.mongo_pass}@${process.env.mongo_cluster}.wbvaxki.mongodb.net/${process.env.mongo_db}?retryWrites=true&w=majority`;

  let client;

  try {
    client = await MongoClient.connect(dbURL);
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }

  const db = client.db();

  try {
    const result = await db.collection('messages').insertOne(newMessage);
    newMessage.id = result.insertedId;
  } catch (error) {
    client.close();
    res.status(500).json({ message: 'Storing message failed!' });
    return;
  }

  client.close();

  res
    .status(201)
    .json({ message: 'Successfully stored message!', message: newMessage });
}

export default handler;
