const express = require('express');
const router = express.Router();
const Patient = require("../models/patient");

router.get('/:year', async (req, res) => {
  const year = req.params.year;

  try {
    const stats = await Patient.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(`${year}-01-01`),
            $lte: new Date(`${year}-12-31T23:59:59.999Z`)
          }
        }
      },
      {
        $group: {
          _id: {
            month: { $month: "$createdAt" },
            sex: "$sex"
          },
          count: { $sum: 1 }
        }
      },
      {
        $group: {
          _id: "$_id.month",
          counts: {
            $push: {
              k: "$_id.sex",
              v: "$count"
            }
          }
        }
      },
      {
        $project: {
          _id: 0,
          month: { $toString: "$_id" },
          men: {
            $ifNull: [
              {
                $toInt: {
                  $getField: {
                    field: "v",
                    input: {
                      $first: {
                        $filter: {
                          input: "$counts",
                          as: "c",
                          cond: { $eq: ["$$c.k", "Male"] }
                        }
                      }
                    }
                  }
                }
              }, 0
            ]
          },
          women: {
            $ifNull: [
              {
                $toInt: {
                  $getField: {
                    field: "v",
                    input: {
                      $first: {
                        $filter: {
                          input: "$counts",
                          as: "c",
                          cond: { $eq: ["$$c.k", "Female"] }
                        }
                      }
                    }
                  }
                }
              }, 0
            ]
          }
        }
      },
      { $sort: { month: 1 } }
    ]);

    res.json(stats);
  } catch (err) {
    console.error("Aggregation error:", err);
    res.status(500).json({ error: "Failed to fetch gender statistics." });
  }
});

module.exports = router;
