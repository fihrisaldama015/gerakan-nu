import { Client, ID, Storage } from "appwrite";

const client = new Client();

const storage = new Storage(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

export { client, storage, ID };
