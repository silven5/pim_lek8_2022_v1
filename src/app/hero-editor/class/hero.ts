export class Hero
{
    name: string;
    skills: string[] = new Array()
    constructor(name:string, skills:string[])
    {
        this.name = name;
        this.skills = skills;
    }
}