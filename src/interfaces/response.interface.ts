export interface response {
  message: string;
  error: boolean;
  data: Array<Object> | Object;
  tokenChanged?: boolean;
  tokens?: {
    token: string;
    refreshToken: string;
  } | null;
}
