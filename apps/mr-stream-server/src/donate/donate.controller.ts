import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DonateService } from "./donate.service";
import { DonateControllerBase } from "./base/donate.controller.base";

@swagger.ApiTags("donates")
@common.Controller("donates")
export class DonateController extends DonateControllerBase {
  constructor(protected readonly service: DonateService) {
    super(service);
  }
}
