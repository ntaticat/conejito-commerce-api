export interface IUserApplication {
    name: string;
    email: string;
    password: string;
    image: string;
    google: boolean;
    role: string;
    state: boolean;
}

export const userRoles = ["ADMIN", "SELLER"];