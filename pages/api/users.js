import { db, auth } from "../../firebase";
import { collection, doc, getDocs, query, where } from "firebase/firestore";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const usersSnaphot = await getDocs(collection(db, "users"));
        let users = [];
        usersSnaphot.forEach((item) => {
          users.push(item.data());
        });

        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    case "POST":
      try {
        const user = await User.create(req.body);
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
