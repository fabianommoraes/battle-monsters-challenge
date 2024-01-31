import jsondata from "./data";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      res.status(200).json(jsondata);
    } catch (error) {
      console.log(error);
    }
  }
}
