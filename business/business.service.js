const pool = require("../config/database");

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into business(business_name, business_category,	business_sub_category, monthly_income, entity_type,	address, city, state, country, pincode,	landmark, account_number, bank_name, ifsc, branch_name,	bank_address)
                values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
            `,
            [
                data.business_name,
                data.business_category,
                data.business_sub_category, 
                data.monthly_income, 
                data.entity_type,	
                data.address, 
                data.city, 
                data.state, 
                data.country, 
                data.pincode,	
                data.landmark, 
                data.account_number, 
                data.bank_name, 
                data.ifsc, 
                data.branch_name,	
                data.bank_address
            ],//it gonna replace ? mark
            (error, results, fields) => {
                if (error) {
                   return callback(error);
                }
                return callback(null, results);
            }
        );
    }
}