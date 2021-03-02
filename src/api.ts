import ky from "ky";

type ContactData = {
  name: string;
  email: string;
  message: string;
};

export async function submitContactForm(data: ContactData): Promise<void> {
  if (!process.env.GATSBY_CONTACT_FORM_ENDPOINT) {
    throw new Error("No endpoint for contact form specified!");
  }

  await ky.post(process.env.GATSBY_CONTACT_FORM_ENDPOINT, { json: data });
}
