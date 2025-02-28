import { Request, Response, NextFunction } from "express";
import { findToolByName } from "../services/tool.service";

export const searchTool = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const { name } = req.query;
  if (!name) return res.status(400).json({ error: "Tool name is required" });

  try {
    const result = await findToolByName(name as string);

    if (!result || (Array.isArray(result) && result.length === 0)) {
      return res.status(404).json({ message: "No matching tool found" });
    }

    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: "Database query failed" });
  }
};