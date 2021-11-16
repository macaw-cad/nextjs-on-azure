import { GraphQLRequestClient } from "@sitecore-jss/sitecore-jss-nextjs";
import fs from "fs";
import { getIntrospectionQuery } from "graphql";
import { generateConfig } from "./generate-config";

const fetch = require('node-fetch');
// This script load graphql introspection data in order to use graphql code generator and generate typescript types
// The `jss graphql:update` command should be executed when Sitecore templates related to the site are altered.

generateConfig();

let jssConfig;

try {
  // eslint-disable-next-line
  jssConfig = require('../src/temp/config');
} catch (e) {
  console.error(
    "Unable to require JSS config. Ensure `jss setup` has been run, and the app has been started at least once after setup."
  );
  console.error(e);
  process.exit(1);
}

console.log(`Fetch graphql introspection data from ${jssConfig.graphQLEndpoint}...`);

const client = new GraphQLRequestClient(jssConfig.graphQLEndpoint, {
  apiKey: jssConfig.sitecoreApiKey,
});

client
  .request(getIntrospectionQuery())
  .then((result) => {
    fs.writeFile(
      "./src/temp/GraphQLIntrospectionResult.json",
      JSON.stringify(result, null, 2),
      (err) => {
        if (err) {
          console.error("Error writing GraphQLIntrospectionResult file", err);
          return;
        }

        console.log("GraphQL Introspection Data successfully fetched!");
      }
    );
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

(async function(){
  
  try {
    const introSpectionQuery = {
      "query": `
        query IntrospectionQuery {
          __schema {
            queryType { name }
            mutationType { name }
            subscriptionType { name }
            types {
              ...FullType
            }
          }
        }
      
        fragment FullType on __Type {
          kind
          name
          description
          fields(includeDeprecated: true) {
            name
            description
            args {
              ...InputValue
            }
            type {
              ...TypeRef
            }
            isDeprecated
            deprecationReason
          }
          inputFields {
            ...InputValue
          }
          interfaces {
            ...TypeRef
          }
          enumValues(includeDeprecated: true) {
            name
            description
            isDeprecated
            deprecationReason
          }
          possibleTypes {
            ...TypeRef
          }
        }
      
        fragment InputValue on __InputValue {
          name
          description
          type { ...TypeRef }
          defaultValue
        }
      
        fragment TypeRef on __Type {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
              }
            }
          }
        
      }`,
      "variables":{}
    };

    const githubResults = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `bearer ${process.env.GITHUB_PRIVATE_KEY}`
      },
      body: JSON.stringify(introSpectionQuery)
    });

    const githubData = await githubResults.json();
    fs.writeFile(
      "./src/temp/GraphQLIntrospectionResultGithub.json",
      JSON.stringify(githubData, null, 2),
      (err) => {
        if (err) {
          console.error("Error writing GraphQLIntrospectionResultGithub file", err);
          return;
        }

        console.log("GraphQL Github Introspection Data successfully fetched!");
      }
    );
  } catch (e) {
    console.error(e);
    process.exit(1);
  }

}());



// filmClient
//   .request(getIntrospectionQuery())
//   .then((result) => {
//     fs.writeFile(
//       "./src/temp/GraphQLIntrospectionResultFilm.json",
//       JSON.stringify(result, null, 2),
//       (err) => {
//         if (err) {
//           console.error("Error writing GraphQLIntrospectionResultFilm file", err);
//           return;
//         }

//         console.log("GraphQL Film Introspection Data successfully fetched!");
//       }
//     );
//   })
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   });
