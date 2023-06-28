import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({
    ping: "pong",
  });
});

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`http server running`);
});
