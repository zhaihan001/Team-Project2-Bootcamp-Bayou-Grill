const fs = require("fs");
const router = require("../homeRoutes");
const PDFExportor = require("pdf-export").default;
const exporter = new PDFExportor({
  host: "localhost",
  port: 9333,
  chromeBin: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  timeout: 5000,
});

router.get("/:id", async (req, res) => {
  const PORT = process.env.PORT || 3001;
  console.log(req.params.id);
  Promise.all([
    exporter
      .export(`http://localhost:${PORT}/orderhistory/detail/${req.params.id}`)
      .then((buffer) => {
        fs.writeFileSync("Order Receipt.pdf", buffer);
      }),
  ]).then(exporter.dispose.bind(exporter), console.log);
});

module.exports = router;
