import express from "express";
import cors from "cors";
import response from "./utils/response.js";
import weatherRoutes from "./routes/weatherRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/v1/weather", weatherRoutes);


app.get("/", (req, res) => {
  response(
    200,
    null,
    {
      status: "Api Ready!",
      base_url: `${req.protocol}://${req.get("host")}`,
      endpoints: {
        search: "/v1/weather/search/:search",
        id: "/v1/weather/id/:id",
      },
    },

    res
  );
});

export default app;
