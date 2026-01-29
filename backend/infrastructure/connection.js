import Sequelize from "sequelize";

const db = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
);

async function connectWithRetry() {
  while (true) {
    try {
      await db.authenticate();
      console.log("The connection was succesfull");
      break;
    } catch (error) {
      console.log("There was an error " + error);
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }
}

await connectWithRetry();

export default db;