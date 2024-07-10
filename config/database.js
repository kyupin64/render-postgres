const { Pool } = require('pg');

let dbConfig = {
    connectionString: process.env.DATABASE_URL || 'postgresql://mtec_h41e_user:R2DcBok0Df1QFhNZPkkeWyfyClQG1kpd@dpg-cq795aqju9rs73d80fj0-a.oregon-postgres.render.com/mtec_h41e',
    ssl: {rejectUnauthorized: false}
};

const pool = new Pool(dbConfig);

exports.getActors = (req, res) => {
    pool.query('SELECT * FROM actor LIMIT 5', (err, result) => {
        if (err) throw err;
        for (const row of result.rows) {
            console.log(row);
        };
        // res.status(200).json(result.rows);
    });
};

exports.getFilmById = async (req, res) => {
    const id = req.params.id;
    const sqlConfig = {
        text: 'SELECT * FROM films where film_id = $1',
        values: [id],
    };
    try {
        const result = await pool.query(sqlConfig);
        if (result.rowCount <= 0) {
            res.status(200).json({'message': 'no record'});
        } else {
            for (const row of result.rows) {
                console.log(row);
            };
            // res.status(200).json(result.rows);
        }
    } catch (error) {
        
    };
};
