import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

export async function run() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
