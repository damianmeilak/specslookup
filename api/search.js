const { search } = require('./_db');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const q = (req.query.q || '').trim();
  if (!q || q.length < 2) return res.json([]);
  res.json(search(q));
};
