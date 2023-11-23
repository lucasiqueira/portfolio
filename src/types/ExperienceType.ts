export type ExperienceType = {
  timePeriod: {
    start: string;
    end: string;
  };
  show: string;
  employer: string;
  lastRole: string;
  location: string;
  roleDescription: string;
  skills: string[];
  pastRoles?: pastRoles[]; 
};

type pastRoles = {
  timePeriod: {
    start: string;
    end: string;
  };
  role: string;
};
