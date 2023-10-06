export interface Experience {
    company: string,
    description: string,
    role: string,
    startDate: Date,
    endDate: Date,
    logoPath: string,
    technologies: string[],
    team?: string,
}

export interface Interest {
    name: string,
    startDate: Date,
    endDate: Date,
}

export interface Contact {
    name: string,
    location: string,
}

export interface Degree {
    degree: string,
    study: string,
}

export interface Education {
    school: string,
    startYear: number,
    endYear: number,
    program?: string,
    degrees: Degree[],
}

export interface Resume {
    tldr: string,
    experiences: Experience[],
    interests: Interest[],
    contact: Contact,
    education: Education,
    skills: string[],
}
