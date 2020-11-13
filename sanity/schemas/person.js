import garnish from "./garnish"

export default {

  name: 'Person',
  title: 'DonerMasters',
  type: 'document',
  icon: () => `👤 `,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the person',
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
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image person',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
  ],

}