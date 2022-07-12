export interface Experience {
    id: number;
    companyName: string;
    role: String;
    fromDate: String;
    toDate: String;
    tasks: Task[];
}

export interface Task{
    projectName: String,
    descs: String[];
}