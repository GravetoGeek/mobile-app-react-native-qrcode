import {Module} from '@nestjs/common';
import {PrismaService} from './driven-adapters/prisma/prisma.service';

@Module({
    providers: [PrismaService],
    exports: [PrismaService],
})
export class DatabaseModule {}
export {PrismaService};
