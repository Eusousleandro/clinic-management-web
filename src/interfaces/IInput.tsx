export interface IInput {
    type: string
    placeholder: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}