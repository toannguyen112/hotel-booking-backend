export { };
declare global {
    namespace Express {
        interface Request {
            tenant_user: any;
            token: string;
        }
    }
}