export default {

  name: 'kebab',
  title: 'Kebab',
  type: 'document',
  icon: () => `🥙`,
  fields: [
    {
      name: 'name',
      title: 'Kebab name',
      type: 'string',
      description: 'Name of the kebab',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,

      }
      
    },
    {
      name: 'image',
      title: 'Image Kebab',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'price of the kebab in euros',
      validation: Rule => Rule.min(5),
    },

  ]
}