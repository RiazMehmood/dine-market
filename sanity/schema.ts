import { type SchemaTypeDefinition } from 'sanity'
import { Product } from './lib/products';
import { category } from './lib/category';
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product, category],
}
