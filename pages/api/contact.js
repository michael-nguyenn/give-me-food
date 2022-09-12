function handler(req, res) {
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

  console.log(newMessage);

  res
    .status(201)
    .json({ message: 'Successfully stored message!', message: newMessage });
}

export default handler;
