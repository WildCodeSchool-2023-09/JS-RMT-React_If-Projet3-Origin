const AbstractManager = require("./AbstractManager");

class VideoManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "video" as configuration
    super({ table: "video" });
  }

  // The C of CRUD - Create operation

  async create(video) {
    // Execute the SQL INSERT query to add a new video to the "video" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, description, year, url, category_id, sport_id) values (?,?,?,?,?,?)`,
      [
        video.title,
        video.description,
        video.year,
        video.url,
        video.category_id,
        video.sport_id,
      ]
    );

    // Return the ID of the newly inserted video
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific video by its ID
    const [rows] = await this.database.query(
      `select video.id, video.title, video.description, video.year, video.url, video.category_id, video.sport_id, category.name from ${this.table} inner join category on category.id = ${this.table}.category_id where ${this.table}.id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the video
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all videos from the "video" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of videos
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing video

  // async update(video) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an video by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = VideoManager;
