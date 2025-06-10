const express = require("express");
const router = express.Router();
const { runPythonScript } = require("../utils/runPython");

router.get("/cpu", async (req, res) => {
  const result = await runPythonScript("check_cpu.py");
  res.json({ output: result });
});

router.get("/memory", async (req, res) => {
  const result = await runPythonScript("check_memory.py");
  res.json({ output: result });
});

router.get("/disk", async (req, res) => {
  const result = await runPythonScript("check_disk.py");
  res.json({ output: result });
});

router.get("/ports", async (req, res) => {
  const result = await runPythonScript("check_ports.py");
  res.json({ output: result });
});

module.exports = router;