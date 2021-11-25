import { ApolloClient,InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://content-baboon-34.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    headers: {
      "x-hasura-admin-secret":
        "N0PsQQLIvcCceY47LESyoQu0mA1k9vHYILFMtEh9NcgF7mbgeAKmwHYHp1fhezpQ",
    },
})

export default client;