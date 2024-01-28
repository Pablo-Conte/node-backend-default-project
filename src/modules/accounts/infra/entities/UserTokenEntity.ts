import { UserToken } from "@prisma/client";

class UserTokenEntity implements UserToken {
    readonly id_i: number;
    id_e: string;
    count: number;
    user_id: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    
}

export { UserTokenEntity };