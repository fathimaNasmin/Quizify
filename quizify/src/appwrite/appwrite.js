import { Client, Databases, ID } from "appwrite";
import conf from "../conf/conf";

export const client = new Client();

client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

export { ID } from "appwrite";

const databases = new Databases(client);

// Create a new participant in backend
export const createUser = async ({ name, score }) => {
  const createNewData = await databases.createDocument(
    conf.appwriteDatabaseId, //database id
    conf.appwriteCollectionId, //collection id
    ID.unique(),
    { name: name, score: score }
  );
  console.log("successfully added new participant");
  return createNewData;
};

// Get list of all users
export const getAllParticipants = async () => {
  const allUsers = await databases.listDocuments(
    conf.appwriteDatabaseId, //database id
    conf.appwriteCollectionId, //collection id
    [] // queries (optional)
  );

  console.log("Accessed all Participants");
  return allUsers;
};

// PATCH : Update single user data
export const editUserData = async ({ id, score }) => {
  const patchUser = await databases.updateDocument(
    conf.appwriteDatabaseId, //database id
    conf.appwriteCollectionId, //collection id
    id, // documentId
    { score } // data (optional)
  );

  console.log("User updated");
  return patchUser;
};


