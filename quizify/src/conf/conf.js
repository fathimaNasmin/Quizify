const conf = {
  appwriteUrl: String(import.meta.env.VITE_REACT_APP_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_REACT_APP_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_REACT_APP_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_REACT_APP_COLLECTION_ID),
};

export default conf;
