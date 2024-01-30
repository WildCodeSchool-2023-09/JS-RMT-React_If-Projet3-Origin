// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all clients from the database
    const clients = await tables.client.readAll();

    // Respond with the clients in JSON format
    res.status(200).json(clients);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    // Fetch all clients from the database
    const clients = await tables.client.readAll();
    // Respond with the clients in JSON format
    res.status(200).json(clients);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific client from the database based on the provided ID
    const client = await tables.client.read(req.params.id);

    // If the client is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the client in JSON format
    if (client == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(client);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
const edit = async (req, res, next) => {
  // Extract the client data from the request body
  const client = req.body;

  try {
    // Insert the client into the database
    await tables.client.update(client, req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the client data from the request body
  const client = req.body;

  try {
    // Insert the client into the database
    const insertId = await tables.client.create(client);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted client
    res.status(201).json({ ...req.body, id: insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  // Extract the client data from the request body
  try {
    // Insert the client into the database
    await tables.client.delete(req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  login,
  browse,
  read,
  edit,
  add,
  destroy,
};
