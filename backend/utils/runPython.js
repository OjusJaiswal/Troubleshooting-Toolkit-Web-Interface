const { exec } = require("child_process");
const path = require("path");

function runPythonScript(scriptName) {
  return new Promise((resolve, reject) => {
    const scriptPath = path.join(__dirname, "../../diagnostics", scriptName);
    exec(`python3 ${scriptPath}`, (error, stdout, stderr) => {
      if (error) reject(stderr);
      else resolve(stdout.trim());
    });
  });
}

module.exports = { runPythonScript };