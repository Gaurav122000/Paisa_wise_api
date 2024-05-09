const pool = require("../config/database");


module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into signUp(firstName, lastName, gender, number, email, password)
                values(?,?,?,?,?,?)
            `,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.number,
                data.email,
                data.password
            ],//it gonna replace ? mark
            (error, results, fields) => {
                if (error) {
                   return callback(error);
                }
                return callback(null, results);
            }
        );
    },

    getUsers: callBack => {
        pool.query(
            `select id, firstName, lastName, gender, email, number from signUp`,
            [],
            (error, results, fields) => {
                if (error) {
                  return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    getUserByUserId: (id, callBack) => {
        pool.query(
            `select id, firstName, lastName, gender, email, number from signUp where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                  return callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },

    updateUser: (data, callback) => {
        pool.query(
            `update signUp set firstName=?, lastName=?, gender=?, number=?, email=?, password=? where id = ?`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.number,
                data.email,
                data.password,
                data.id
            ],//it gonna replace ? mark
            (error, results, fields) => {
                if (error) {
                   return callback(error);
                }
                return callback(null, results);
            }
        );
    },

    deleteUsers: (data, callBack) => {
        pool.query(
            `delete from signUp where id = ?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                  return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    //For login page
    getUserByUserEmail: (email, callBack) => {
        pool.query(
            `select * from signUp where email = ?`,
            [email],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};
//we do querry with 3 perameter (1. querry with values, 2. data, 3. callback function which gonna take 3 perameter)
//error and results works vice-versa either error will null or results will null. 