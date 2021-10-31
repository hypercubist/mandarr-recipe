import app from "./server";

const PORT = 4401;

const handleListening = () => {
  console.log(`😎Server listening on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
