import type { ChangeEvent } from "react";

export interface IInput {
    type: string
    placeholder: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}