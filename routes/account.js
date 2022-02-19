const router = require("express").Router();
const pool = require("../db_config");

////// Account C.R.U.D.

router.get("/:account_number", function (req, res, next) {
  let { account_number } = req.params;
  const text = "SELECT id, username, password, email FROM public.accounts WHERE id = $1";
  pool.query(text, [account_number], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send(result.rows);
  });
});

router.post("/", (req, res) => {
  res.send(`Here is placeholder code for creating an account`);
});

router.delete("/:account_number", (req, res) => {
  let { account_number } = req.params;
  res.send(`Here is placeholder code for deleting account ${account_number}`);
});

module.exports = router;
