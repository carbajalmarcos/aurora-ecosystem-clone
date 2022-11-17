import { useState } from "react";
import { Banner, NavBar, Hero, Projects, TopBackground } from "../../components";
import { Meteors } from "../../components/Meteors/Meteors";
import { Item, ProjectCollectionClass } from "../../interfaces/projects";
import { getProjectsByNameValue, getProjects } from "../../services";

interface Props {
  projects: ProjectCollectionClass
}

export const Ecosystem = ({ projects }: Props) => {
  const [data, setData] = useState<Item[]>(projects.items || [])

  const handleSearch = async (input: any) => {
    let fetchedData = []
    const searchInput = input.target.value.trim()
    if (!searchInput.length) {
      const { projects } = await getProjects()
      fetchedData = projects?.items || []
    } else {
      const { projects } = await getProjectsByNameValue(searchInput)
      fetchedData = projects?.items || []
    }
    setData(fetchedData)
  }

  return (
    <div className='relative bg-aurora-black'>
      <Banner />
      <NavBar />
      <Meteors />
      <TopBackground />
      <main className="flex flex-col flex-1 w-full">
        <Hero onSearch={handleSearch} />
        <Projects data={data} />
      </main>
    </div>
  );
};
