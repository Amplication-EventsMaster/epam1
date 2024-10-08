/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Feedback } from "./Feedback";
import { FeedbackCountArgs } from "./FeedbackCountArgs";
import { FeedbackFindManyArgs } from "./FeedbackFindManyArgs";
import { FeedbackFindUniqueArgs } from "./FeedbackFindUniqueArgs";
import { CreateFeedbackArgs } from "./CreateFeedbackArgs";
import { UpdateFeedbackArgs } from "./UpdateFeedbackArgs";
import { DeleteFeedbackArgs } from "./DeleteFeedbackArgs";
import { Customer } from "../../customer/base/Customer";
import { Hotel } from "../../hotel/base/Hotel";
import { FeedbackService } from "../feedback.service";
@graphql.Resolver(() => Feedback)
export class FeedbackResolverBase {
  constructor(protected readonly service: FeedbackService) {}

  async _feedbacksMeta(
    @graphql.Args() args: FeedbackCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Feedback])
  async feedbacks(
    @graphql.Args() args: FeedbackFindManyArgs
  ): Promise<Feedback[]> {
    return this.service.feedbacks(args);
  }

  @graphql.Query(() => Feedback, { nullable: true })
  async feedback(
    @graphql.Args() args: FeedbackFindUniqueArgs
  ): Promise<Feedback | null> {
    const result = await this.service.feedback(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Feedback)
  async createFeedback(
    @graphql.Args() args: CreateFeedbackArgs
  ): Promise<Feedback> {
    return await this.service.createFeedback({
      ...args,
      data: {
        ...args.data,

        customer: args.data.customer
          ? {
              connect: args.data.customer,
            }
          : undefined,

        hotel: args.data.hotel
          ? {
              connect: args.data.hotel,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Feedback)
  async updateFeedback(
    @graphql.Args() args: UpdateFeedbackArgs
  ): Promise<Feedback | null> {
    try {
      return await this.service.updateFeedback({
        ...args,
        data: {
          ...args.data,

          customer: args.data.customer
            ? {
                connect: args.data.customer,
              }
            : undefined,

          hotel: args.data.hotel
            ? {
                connect: args.data.hotel,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Feedback)
  async deleteFeedback(
    @graphql.Args() args: DeleteFeedbackArgs
  ): Promise<Feedback | null> {
    try {
      return await this.service.deleteFeedback(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Customer, {
    nullable: true,
    name: "customer",
  })
  async getCustomer(
    @graphql.Parent() parent: Feedback
  ): Promise<Customer | null> {
    const result = await this.service.getCustomer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Hotel, {
    nullable: true,
    name: "hotel",
  })
  async getHotel(@graphql.Parent() parent: Feedback): Promise<Hotel | null> {
    const result = await this.service.getHotel(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
