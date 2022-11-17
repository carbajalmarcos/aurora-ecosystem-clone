import { ProjectCollectionClass } from '../src/interfaces/projects';
import { Ecosystem, } from '../src/screens'
import { getProjects } from '../src/services';

export default function ({ projects }:{projects: ProjectCollectionClass} ) {
  return <Ecosystem projects={projects} />
}


export async function getStaticProps() {
  const { projects, error } = await getProjects()
  return {
    props: {
      projects,
      error
    }
  }
}