/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DonateWhereInput } from "./DonateWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DonateListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DonateWhereInput,
  })
  @ValidateNested()
  @Type(() => DonateWhereInput)
  @IsOptional()
  @Field(() => DonateWhereInput, {
    nullable: true,
  })
  every?: DonateWhereInput;

  @ApiProperty({
    required: false,
    type: () => DonateWhereInput,
  })
  @ValidateNested()
  @Type(() => DonateWhereInput)
  @IsOptional()
  @Field(() => DonateWhereInput, {
    nullable: true,
  })
  some?: DonateWhereInput;

  @ApiProperty({
    required: false,
    type: () => DonateWhereInput,
  })
  @ValidateNested()
  @Type(() => DonateWhereInput)
  @IsOptional()
  @Field(() => DonateWhereInput, {
    nullable: true,
  })
  none?: DonateWhereInput;
}
export { DonateListRelationFilter as DonateListRelationFilter };