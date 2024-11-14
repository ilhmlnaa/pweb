import express from "express";
import cors from "cors";
import response from "./utils/response.js";
import mhsRoutes from "./routes/mhsRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import authentication from "./middleware/auth.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/v1/auth", authRoutes);
app.use("/v1", authentication, mhsRoutes);

app.get("/", (req, res) => {
  response(200, null, "Api Ready!!!", res);
});

export default app;
