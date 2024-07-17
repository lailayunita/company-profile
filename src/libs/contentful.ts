import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

//get banyak data sekaligus
export const getEntriesHomepage = async () => {
  try {
    const response = await client.getEntries({
      content_type: "homepage",
    });
    const homepage = response.items.map((page: any) => {
      return {
        title: page.fields.title,
        thumbnail: page.fields.thumbnail,
        thumbnail2: page.fields.thumbnail2,
        description: page.fields.place,
        projects: page.fields.projects,
        testimonials: page.fields.testimonials,
      };
    });
    return homepage[0];
  } catch (error) {
    console.log(error);
  }
};

export const getEntriesValues = async () => {
  try {
    const response = await client.getEntries({
      content_type: "values",
    });
    const values = response.items.map((value: any) => {
      return {
        icon: value.fields.icon,
        value: value.fields.value,
        desc: value.fields.desc,
      };
    });
    return values;
  } catch (error) {
    console.log(error);
  }
};

export const getEntriesService = async () => {
  try {
    const response = await client.getEntries({
      content_type: "services",
    });
    const services = response.items.map((service: any) => {
      return {
        image: service.fields.image,
        title: service.fields.title,
      };
    });
    return services;
  } catch (error) {
    console.log(error);
  }
};
