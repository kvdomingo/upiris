import ApolloClient from "apollo-boost";

const { NODE_ENV } = process.env;

const uri = NODE_ENV === "development" ? "http://localhost:8000/api/" : "https://upiris.herokuapp.com/api/";

const client = new ApolloClient({ uri });

export default client;
