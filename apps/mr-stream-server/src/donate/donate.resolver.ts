import * as graphql from "@nestjs/graphql";
import { DonateResolverBase } from "./base/donate.resolver.base";
import { Donate } from "./base/Donate";
import { DonateService } from "./donate.service";

@graphql.Resolver(() => Donate)
export class DonateResolver extends DonateResolverBase {
  constructor(protected readonly service: DonateService) {
    super(service);
  }
}
