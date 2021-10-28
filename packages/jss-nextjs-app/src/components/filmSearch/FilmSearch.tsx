import {
  Field,
  useComponentProps,
  GetStaticComponentProps,
  GraphQLRequestClient,
} from "@sitecore-jss/sitecore-jss-nextjs";
import { ComponentProps } from "lib/component-props";
import React from "react";
import { FilmSearchDocument, FilmSearchQuery } from "./filmsearch.film.graphql";
import { Card } from "@nextjsonazure/ui-components/src/components/core/card/Card";

type FilmSearchProps = ComponentProps & {
  fields: {
    searchTerm: Field<string>;
  };
};

const FilmSearch: React.FC<FilmSearchProps> = ({ fields, rendering }): JSX.Element => {
  const data = rendering.uid ? useComponentProps<FilmSearchQuery>(rendering.uid) : undefined;

  return (
    <div data-e2e-id="graphql-connected">
      <h2>Displaying a list of films using a search term configured in Sitecore</h2>
      <p>
        Currently using this search term:{" "}
        <strong>{fields.searchTerm.value.replace(/\s+/g, "")}</strong>
      </p>

      {data?.search?.edges && (
        <div className="row row--4c">
          {data.search.edges.map((edge, i) => {
            const film = edge?.node?.__typename === "Movie" ? edge.node : undefined;

            if (!film) {
              return null;
            }

            const date = film.releaseDate ? new Date(film.releaseDate).toLocaleDateString() : "";
            if (!film.title) {
              return null;
            }

            return (
              <div className="column" key={i}>
                <Card
                  title={<>{film.title}</>}
                  description={<>{date ? `Release date: ${date}` : ""}</>}
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
  const graphQLClient = new GraphQLRequestClient("https://tmdb.apps.quintero.io/", {});

  const result = await graphQLClient.request<FilmSearchQuery>(FilmSearchDocument, {
    // @ts-ignore
    searchTerm: rendering.fields?.searchTerm?.value.replace(/\s+/g, ""),
  });

  return result;
};

export default FilmSearch;
