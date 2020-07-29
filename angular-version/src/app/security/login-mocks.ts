import { UserAccessAuth } from './app-user-auth';

export const LOGIN_MOCKS: UserAccessAuth[] = [
    {
        userName: 'Ted',
        bearerToken: 'abi393kdkd9393ikd',
        isAuthenticated: true,
        canAccessProjects: true,
    },
    {
        userName: 'Paul',
        bearerToken: 'sd9f923k3kdmcjkhd',
        isAuthenticated: true,
        canAccessProjects: true,
    }
];
