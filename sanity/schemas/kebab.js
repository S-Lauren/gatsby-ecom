import PrinceInput from "../components/PrinceInput";
import garnish from "./garnish"

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
      inputComponent: PrinceInput,
      description: 'price of the kebab in euros',
      validation: Rule => Rule.min(5),
    },
    {
      name: 'garnish',
      title: 'Garnish',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'garnish'}]}]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      garnish0: 'garnish.0.name', 
      garnish1: 'garnish.1.name', 
      garnish2: 'garnish.2.name', 
      garnish3: 'garnish.3.name', 
    },
    prepare: ({title, media,...garnishs}) => {
      const garnishes = Object.values(garnishs).filter( Boolean);
      return {
        title,
        media,
        subtitle: garnishes.join(', ')
      }
    }
  }
}