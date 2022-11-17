import request from "graphql-request";

export const fetcher =<T>(query: string, variables?: object) => request<T> ({
  url: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master`,
  document: query,
  variables,
  requestHeaders: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_TOKEN}`,
    'Content-Type': 'application/json',
  },
})
