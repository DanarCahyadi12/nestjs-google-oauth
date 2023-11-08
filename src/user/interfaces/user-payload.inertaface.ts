export interface UserPayload {
  id: string;
  displayName: string;
  email: string;
  picture: string;
}

export interface UserScopes {
  id?: string;
  displayName?: string;
  email?: string;
  picture?: string;
  password?: string;
  refreshToken?: string;
}
