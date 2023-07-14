import { defineType, defineField } from "sanity";

export const Promotions = defineType({
  title: "Promotions",
  name: "promotions",
  type: "document",
  fields: [
    defineField({
      title: "1st Card title",
      name: "cardTitle1",
      type: "string",
    }),
    defineField({
      title: "1st Card Subtitle",
      name: "cardSubtitle1",
      type: "string",
    }),
    defineField({
      title: "1st Card Image",
      name: "cardImage1",
      type: "image",
    }),
    defineField({
      title: "2nd Card title",
      name: "cardTitle2",
      type: "string",
    }),
    defineField({
      title: "2nd Card Subtitle",
      name: "cardSubtitle2",
      type: "string",
    }),
    defineField({
      title: "2nd Card Promo Code",
      name: "cardPromoCode2",
      type: "string",
    }),
    
    defineField({
        title: "3rd Card title",
        name: "cardTitle3",
        type: "string",
      }),
      defineField({
        title: "3rd Card Previous Price",
        name: "cardPreviousPrice3",
        type: "number",
      }),
      
      defineField({
        title: "3rd Card Current Price",
        name: "cardCurrentPrice3",
        type: "number",
      }),
      defineField({
        title: "3rd Card Image",
        name: "cardImage3",
        type: "image",
      }),
      
    defineField({
        title: "4rth Card title",
        name: "cardTitle4",
        type: "string",
      }),
      defineField({
        title: "4rth Card Previous Price",
        name: "cardPreviousPrice4",
        type: "number",
      }),
      
      defineField({
        title: "4rth Card Current Price",
        name: "cardCurrentPrice4",
        type: "number",
      }),
      defineField({
        title: "4rth Card Image",
        name: "cardImage4",
        type: "image",
      }),
      defineField({
        title: "Promotion footer",
        name: "promoFooter",
        type: "string",
      }),
      defineField({
        title: "Logo",
        name: "logo",
        type: "image",
      }),
      defineField({
        title: "Footer Girl",
        name: "footerGirl",
        type: "image",
      }),
  ],
});
