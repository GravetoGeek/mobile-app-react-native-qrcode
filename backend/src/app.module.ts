import {BarcodeModule} from '@/barcode/barcode.module';
import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {CommonModule} from './common/common.module';
import {DatabaseModule} from './database/database.module';

@Module({
    imports: [BarcodeModule,DatabaseModule,CommonModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
