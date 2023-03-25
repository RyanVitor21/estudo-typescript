const dbUser = process.env.DB_USER
const dbPassowrd = process.env.DB_PASSWORD

export default {
    port: 3000, 
    dbUri: 
    `mongodb+srv://${dbUser}:${dbPassowrd}@cluster0.ztpnmcj.mongodb.net/Filmes?retryWrites=true&w=majority`,
    env: "development",
};

