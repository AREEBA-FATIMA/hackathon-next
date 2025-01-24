import { defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Product Title',
      type: 'string',
      description: 'The name of the product',
    },
    {
      name: 'department',
      title: 'Department',
      type: 'string',
      description: 'The department the product belongs to',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'The price of the product',
    },
    {
      name: 'discountedPrice',
      title: 'Discounted Price',
      type: 'number',
      description: 'The discounted price of the product (if any)',
    },
    {
      name: 'colors',
      title: 'Available Colors',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      description: 'The colors available for this product',
    },
    {
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'An image of the product',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: 'A URL-friendly version of the product title',
    },
    // Add the following fields to match your import script
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'A brief description of the product',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Product rating',
    },
    {
      name: 'ratingCount',
      title: 'Rating Count',
      type: 'number',
      description: 'Number of ratings for the product',
    },
  ],
})
