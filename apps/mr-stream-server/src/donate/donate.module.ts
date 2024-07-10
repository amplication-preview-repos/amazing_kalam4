import { Module } from "@nestjs/common";
import { DonateModuleBase } from "./base/donate.module.base";
import { DonateService } from "./donate.service";
import { DonateController } from "./donate.controller";
import { DonateResolver } from "./donate.resolver";

@Module({
  imports: [DonateModuleBase],
  controllers: [DonateController],
  providers: [DonateService, DonateResolver],
  exports: [DonateService],
})
export class DonateModule {}
