import { Shop } from "./shopInterface";
import { shops } from "./shopsArray";

export const itemRouter = Router();

itemRouter.get("/shops", async (req:Request, res:Response) : Promise<Response> => {



});

app.get('/shops', async (req:Request, res:Response) : Promise<Response> => {
    res.json(shops);
  });

app.get('/shops/:id', async (req:Request, res:Response) : Promise<Response> => {
    const shop = shops.find(shop => shop.id === parseInt(req.params.id));
    if (!shop) {
      return res.status(404).json({ error: `Shop not found: ${req.params.id}` });
    }
    res.json(shop);
  });