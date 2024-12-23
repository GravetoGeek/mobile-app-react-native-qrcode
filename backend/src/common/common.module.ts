import {Module} from '@nestjs/common';
import {CommonController} from './driving-adapters/controllers/common.controller';
import {CommonService} from './driving-adapters/services/common.service';
import {Common} from './providers/common';

@Module({
    providers: [CommonService, Common],
    controllers: [CommonController],
    exports: [CommonService,Common],
})
export class CommonModule {}
export {Common,CommonService};

