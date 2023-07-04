import { defineType, defineField } from "sanity";

export const Hero = defineType({
  title: "Hero",
  name: "hero",
  type: "document",
  fields: [
    defineField({
      title: "Hero Discount Badge",
      name: "heroDiscountBadge",
      type: "string",
    }),
    defineField({
      title: "Hero Main Image",
      name: "heroMainImage",
      type: "image",
    }),
    defineField({
      title: "Hero Sponsor Logos",
      name: "heroSponsorLogos",
      type: "array",
      of: [{type: "image"}]
    }),
  ],
});
