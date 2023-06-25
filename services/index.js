import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getServices = async () => {
  const query = gql`
    query MyQuery {
      servicesConnection {
        edges {
          node {
            content
            id
            createdAt
            title
            employee {
              name
              photo {
                url
              }
            }
            description
            slug
            image {
              url
            }
            price
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.servicesConnection.edges;
};

export const getServiceDetails = async (slug) => {
  const query = gql`
    query GetServiceDetails($slug: String!) {
      service(where: { slug: $slug }) {
        content
        id
        createdAt
        title
        employee {
          name
          photo {
            url
          }
        }
        description
        slug
        image {
          url
        }
        price
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.service;
};
