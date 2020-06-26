

## How to setup into a working application:

1. Run `npm install react react-router-dom` in the base directory

2. Run `npm install express body-parser mysql bcrypt` in /api.

3. Set your personal configs in `api/app/config/db.config.js`.

4. Run the script located in `api/sql/kundportal-mysql-ddl.sql` in your local MySQL.

5. Register a user.

6. Insert industries, companies and shares into your database. You will find templates in `api/sql/kundportal-mysql-dml.sql` to help you.

7. Log in with your created account.
