/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Subscription as PrismaSubscription } from "@prisma/client";
import { SubscribeUserDto } from "../SubscribeUserDto";

export class SubscriptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SubscriptionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.subscription.count(args);
  }

  async subscriptions(
    args: Prisma.SubscriptionFindManyArgs
  ): Promise<PrismaSubscription[]> {
    return this.prisma.subscription.findMany(args);
  }
  async subscription(
    args: Prisma.SubscriptionFindUniqueArgs
  ): Promise<PrismaSubscription | null> {
    return this.prisma.subscription.findUnique(args);
  }
  async createSubscription(
    args: Prisma.SubscriptionCreateArgs
  ): Promise<PrismaSubscription> {
    return this.prisma.subscription.create(args);
  }
  async updateSubscription(
    args: Prisma.SubscriptionUpdateArgs
  ): Promise<PrismaSubscription> {
    return this.prisma.subscription.update(args);
  }
  async deleteSubscription(
    args: Prisma.SubscriptionDeleteArgs
  ): Promise<PrismaSubscription> {
    return this.prisma.subscription.delete(args);
  }
  async SubscribeUser(args: SubscribeUserDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
