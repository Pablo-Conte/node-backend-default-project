import { httpServer } from "./app";

const port = process.env.PORT || 3001;

httpServer.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
