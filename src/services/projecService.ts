import { getAllProjects, getProjectsByName } from './graphql/schemas'
import { fetcher } from "./fetcher";
import { ProjectCollection } from "../interfaces/projects";


const getProjects = async () => {
  try {
    const { projectCollection } = await fetcher<ProjectCollection>(getAllProjects)
    return {
      projects: projectCollection,
      error: null
    }
  } catch (error) {
    return {
      projects: null,
      error
    }
  }
}

const getProjectsByNameValue = async (value: string) => {
  try {
    const { projectCollection } = await fetcher<ProjectCollection>(getProjectsByName, { value })
    return {
      projects: projectCollection,
      error: null
    }
  } catch (error) {
    return {
      projects: null,
      error
    }
  }
}

export {
  getProjects,
  getProjectsByNameValue
}
