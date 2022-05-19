import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import fbConfig from "../firebase/fb-config";

const cache = new InMemoryCache();

const httpLink = createHttpLink({
    uri: 'http://localhost:8080/'
});

const authLink = setContext(async (_, { headers }) => {
    const token = localStorage.getItem('store');
    // let phoneverification = "";
    //
    // const user = await fbConfig.auth().currentUser;
    // if (user) {
    //   await user.getIdToken().then((t) => {
    //     phoneverification = t;
    //   });
    // }

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${JSON.parse(token).token}` : ''
            // phoneverification,
        }
    };
});

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: cache
});
