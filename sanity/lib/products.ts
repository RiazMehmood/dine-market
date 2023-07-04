import { defineType, defineField } from "sanity";

export const Product = defineType({
  title: "Product",
  name: "product",
  type: "document",
  fields: [
    defineField({
      title: "Product Title",
      name: "productTitle",
      type: "string",
    }),
    defineField({
      title: "Product Categories",
      name: "categories",
      type: "string",
      options: {
        list: [
          {
            title: "Male", value: "male"
          },
          {
            title: "Female", value: "female"
          },
          {
            title: "Kids", value: "kids"
          }

        ]
      }
    }),
    
    defineField({
      title: "Product Sub Title",
      name: "subtitle",
      type: "string",
    }),
    defineField({
      title: "Product Price",
      name: "price",
      type: "number",
    }),
    defineField({
      title: "Product Image",
      name: "image",
      type: "image",
    }),
    defineField({
      title: "Product Details",
      name: "productDetails",
      type: "string",
    }),
    defineField({
      title: "Product Care",
      name: "productCare",
      type: "array",
      of: [{type: 'string'}],
      options: {
        list: [
          {title: "val1", value: "Hand wash using cold water."},
          {title: "val2", value: "Do not using bleach."},
          {title: "val3", value: "Hang it to dry."},
          {title: "val4", value: "Iron on low temperature"}
        ]
      }
    })
  ],
});
