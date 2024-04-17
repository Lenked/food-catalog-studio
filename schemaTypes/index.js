export const schemaTypes = [
  {
    title: 'Foods',
    name: 'foods',
    type: 'document',
    fields: [{
        title: 'Food Name',
        name: 'foodName',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        title: 'A little description',
        name: 'foodDesc',
        type: 'text',
        options: {
          maxLength: 200,
        },
        validation: Rule => Rule.required()
      },
      {
        title: "Food Image",
        name: "foodImage",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "category",
        title: "Category",
        type: "reference",
        to: {
          type: "category"
        }
      },
    ]
  },
  {
    name: "category",
    title: "Category",
    type: "document",
    fields: [{
        title: "Title",
        name: "title",
        type: "string",
      },
      {
        title: "Slug",
        name: "slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 96,
        },
      },
      {
        title: "Description",
        name: "description",
        type: "text",
      },
      {
        title: "Image",
        name: "image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        title: "Hex Code",
        name: "hexCode",
        type: "string",
      },
    ],
  },
]
