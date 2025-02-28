import pool from "../config/db";

export const findToolByName = async (name: string) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.execute(
      "SELECT * FROM applications WHERE application_name LIKE ?",
      [`%${name}%`]
    );
    return rows;
  } finally {
    connection.release();
  }
};
