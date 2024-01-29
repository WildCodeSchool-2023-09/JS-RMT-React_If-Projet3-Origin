const AbstractManager = require("./AbstractManager");

class ClientManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "client" as configuration
    super({ table: "client" });
  }

  // The C of CRUD - Create operation

  async create(client) {
    const { nom, prenom, email, sujet, message } = client;
    // Execute the SQL INSERT query to add a new client to the "client" table
    const [result] = await this.database.query(
      `insert into ${this.table} (nom, prenom, email, sujet, message) values (?, ?, ?, ?, ?)`,
      [nom, prenom, email, sujet, message]
    );

    // Return the ID of the newly inserted client
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific client by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the client
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all clients from the "client" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of clients
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing client

  async update(client, id) {
    // Execute the SQL INSERT query to update the row with tie id on the "client" table
    const result = await this.database.query(
      `update ${this.table} set ? where id = ?`,
      [client, id]
    );

    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an client by its ID
  async delete(id) {
    const result = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = ClientManager;
