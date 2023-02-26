import { decode } from "html-entities";

export const parseCurrency = (amount: number) => `${decode("&#8358;")} ${amount}`;
