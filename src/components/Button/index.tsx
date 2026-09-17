import type { IButton } from '../../interfaces/IButton'

export default function Button({ name }: IButton) {
    return (
        <div className="button">
            {name}
        </div>
    )
}