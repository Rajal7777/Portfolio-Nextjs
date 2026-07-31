import {Resend} from "resend";

//initialize resend with api key from env variable
export const resend = new Resend(process.env.RESEND_API_KEY);