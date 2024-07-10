import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DonateServiceBase } from "./base/donate.service.base";

@Injectable()
export class DonateService extends DonateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
