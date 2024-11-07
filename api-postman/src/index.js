import "dotenv/config"; 
import express from "express";
import cors from "cors";
import response  from "./utils/response.js";

const app = express();
import mhsRoutes from "./routes/mhsRoutes.js";

app.use(cors());
app.use(express.json());
app.use("/v1", mhsRoutes);

app.get("/", (req, res) => {
  response(200, null, "Api Ready to Use", res);   
});

export default app;
