import { ChangeEvent } from "react";

export type InputChangeEvent<T> = ChangeEvent<T> & {name: string}