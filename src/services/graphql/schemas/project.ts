import { gql } from 'graphql-request'

export const getAllProjects =  gql`
query {
  projectCollection(order: [isComingSoon_ASC]) {
    items {
      title
      description
      receivedAGrant
      isComingSoon
      image {
        title
        url
      }
    }
  }
}
`
export const getProjectsByName = gql`
query($value: String!) {
  projectCollection(where: { title_contains: $value }) {
    items {
      title
      description
      receivedAGrant
      isComingSoon
      image {
        title
        url
      }
    }
  }
}
`