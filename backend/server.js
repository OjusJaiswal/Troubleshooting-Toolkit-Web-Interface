const express = require("express");
const app = express();
const cors = require("cors");
const diagnosticsRouter = require("./routes/diagnostics");

app.use(cors());
app.use(express.json());

app.use("/api/diagnostics", diagnosticsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});