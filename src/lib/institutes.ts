import { InstituteConfig } from "@/data/institutes";
import { INSTITUTES_LENGTH, Institute, Institutes } from "@/models/institutes";


export const getInstituteByName = (name: string): Institutes => {
  const institute = InstituteConfig.find((institute) => institute.name === name)
  
  if (!institute) {
    return Institutes.HTWR
  }
  return InstituteConfig.indexOf(institute)
}

export function getNextInstitute(current: Institutes): Institutes {
  return (current + 1) % INSTITUTES_LENGTH;
}

export function getPrevInstitute(current: Institutes): Institutes {
  return (current - 1 + INSTITUTES_LENGTH) % INSTITUTES_LENGTH;
}

export function getInstituteConfig(institute: Institutes): Institute {
  return InstituteConfig[institute]
}