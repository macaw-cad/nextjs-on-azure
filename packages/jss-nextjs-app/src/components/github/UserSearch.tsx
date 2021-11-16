import {
  Field,
  useComponentProps,
  GetStaticComponentProps
} from "@sitecore-jss/sitecore-jss-nextjs";
import { ComponentProps } from "lib/component-props";
import React from "react";
import { GithubUserSearchQuery } from "./userSearch.github.graphql";
import { Card } from "@nextjsonazure/ui-components/src/components/core/card/Card";

const query = require('raw-loader!./userSearch.github.graphql').default;

type UserSearchProps = ComponentProps & {
  fields: {
    searchTerm: Field<string>;
  };
};

const UserSearch: React.FC<UserSearchProps> = ({ fields, rendering }): JSX.Element => {
  const data = rendering.uid ? useComponentProps<GithubUserSearchQuery>(rendering.uid) : undefined;

  return (
    <div data-e2e-id="graphql-connected">
      <div style={{display: "none"}}>{JSON.stringify(data)}</div>
      <p>Displaying a list of GitHub users from a organization configured in Sitecore</p>
      <p>
        Currently using this organization:{" "}
        <strong>{fields.searchTerm.value.replace(/\s+/g, "")}</strong>
      </p>

      {data?.organization?.membersWithRole?.nodes && (
        <div className="row row--4c">
          {data?.organization?.membersWithRole?.nodes.map((node, i) => {
            
            const user = node;
            
            if (!user || !user.login) {
              return null;
            }

            return (
              <div className="column" key={i}>
                <Card
                  title={<>{user.login}</>}
                  description={<>
                    {user.company ? <p className="mv-0"><strong>Company</strong>: {user.company}</p> : ""}
                    {user.location ? <p><strong>Location:</strong> {user.location}</p> : ""}
                  </>}
                  image={user.avatarUrl}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const getStaticProps: GetStaticComponentProps = async (rendering) => {
  try {
    const githubResults = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `bearer ${process.env.GHUB_PRIVATE_KEY}`
      },
      
      body: JSON.stringify({
        query: query,
        // @ts-ignore
        variables: { searchTerm: rendering.fields?.searchTerm?.value }
      })

    });
    const githubData = await githubResults.json();


    return githubData.data;
  } catch(e) {
    console.error(e);
    return null;
  }
};

export default UserSearch;
