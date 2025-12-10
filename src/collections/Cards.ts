import { CollectionConfig } from "payload";

export const Cards: CollectionConfig = {
access: {
  read: () => true,
},
  slug: "cards",
  fields: [
     {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "title",
      type: "text",
    },
    {
      name: "button1",
      type: "text",
    },
    {
      name: "subtitle",
      type: "text",
    },
     {
      name: "button2",
      type: "text",
    },
     {
      name: "button3",
      type: "text",
    },
  ],
};
