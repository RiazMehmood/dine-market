import { type SchemaTypeDefinition } from 'sanity'
import { Product } from './lib/products';
import { Hero } from './lib/hero';
import { Promotions } from './lib/promotions';
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product, Hero, Promotions],
}
