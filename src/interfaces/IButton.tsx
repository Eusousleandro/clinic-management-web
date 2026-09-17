import type { MouseEvenHandler } from 'react';

export interface IButton {
    name: string
    onClick: MouseEventHandler<HTMLButtonElement>
}