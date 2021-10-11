import {
  Field,
  useComponentProps,
  GetStaticComponentProps,
  GraphQLRequestClient,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import React from 'react';
import {
  FilmSearchDocument,
  MovieEdge,
  MovieOrTvOrPeopleConnection,
} from './filmsearch.film.graphql';
import { Card } from '@nextjsonazure/ui-components/src/components/core/card/Card';

type FilmSearchProps = ComponentProps & {
  fields: {
    searchTerm: Field<string>;
  };
};

type FilmSearchData = {
  search: MovieOrTvOrPeopleConnection;
};

const FilmSearch: React.FC<FilmSearchProps> = ({ fields, rendering }): JSX.Element => {
  const data = rendering.uid ? useComponentProps<FilmSearchData>(rendering.uid) : undefined;

  return (
    <div data-e2e-id="graphql-connected">
      <h2>Displaying a list of films using a search term configured in Sitecore</h2>
      <p>
        Currently using this search term: <strong>{fields.searchTerm.value}</strong>
      </p>

      {data?.search.edges && (
        <div className="row">
          {data.search.edges.map((edge, i) => {
            const film = edge as MovieEdge;
            const date = film.node?.releaseDate
              ? new Date(film.node.releaseDate).toLocaleDateString()
              : '';
            if (!film.node?.title) {
              return null;
            }

            return (
              <div className="col-sm-4 mb-3" key={i}>
                <Card
                  title={<>${film.node.title}</>}
                  description={<>{date ? `Release date: ${date}` : ''}</>}
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
  const graphQLClient = new GraphQLRequestClient('https://tmdb.apps.quintero.io/', {});

  const result = await graphQLClient.request<FilmSearchData>(FilmSearchDocument, {
    // @ts-ignore
    searchTerm: rendering.fields?.searchTerm?.value,
  });

  return result;
};

export default FilmSearch;
