import type { IButton } from '../../interfaces/IButton'

export default function Button({ name, onClick }: IButton) {
    return (
        <div className="button" onClick={onClick}>
            {name}
        </div>
    )
}