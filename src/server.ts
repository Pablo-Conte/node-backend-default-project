import { httpServer } from "./shared/infra/app";

const port = process.env.PORT || 3001;

httpServer.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
