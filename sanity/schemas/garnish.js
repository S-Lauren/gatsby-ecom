export default {

  name: 'garnish',
  title: 'Garnish',
  type: 'document',
  icon: () => `🔪`,
  fields: [
    {
      name: 'name',
      title: 'garnish name',
      type: 'string',
      description: 'Name of the garnish',
    },
    {
      name: 'vegetarian',
      title: 'vegetarian',
      type: 'boolean',
      description: 'Name of the garnish',
      options: {
        layout: 'checkbox',
      }
    },
  ], 
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian'
    },
    prepare: ({name, vegetarian}) => ({
      title: `${name} ${vegetarian ? '🥬' : ''}`
    })
  }
      
}