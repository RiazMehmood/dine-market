export const Product = {
  title: "Product",
  name: "product",
  type: "document",
  fields: [
    {
      title: "Product Title",
      name: "title",
      type: "string",
    },
    {
      title: "Product Price",
      name: "price",
      type: "number",
    },
    {
      title: "Product Description",
      name: "description",
      type: "string",
    },
    {
      title: "Product Image",
      name: "image",
      type: "image",
    },
    {
      title: "Category",
      name: "category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    },
  ],
};
