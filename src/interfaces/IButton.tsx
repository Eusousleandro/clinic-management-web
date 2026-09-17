import type { MouseEventHandler } from 'react';

export interface IButton {
    name: string
    onClick: MouseEventHandler<HTMLDivElement>
}