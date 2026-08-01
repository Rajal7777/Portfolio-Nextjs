import {Resend} from "resend";

if (!process.env.RESEND_API_KEY) {
    throw new Error(
      "RESEND_API_KEY is missing"
    );
}

//initialize resend instance with api key from environment variable
export const resend = new Resend(process.env.RESEND_API_KEY);