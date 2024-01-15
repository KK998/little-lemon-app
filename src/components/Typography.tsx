import cn from "../util/cn"

type TypographyStyles = |
    'Display title' |
    'Sub title' |
    'Lead text' |
    'Section title' |
    'Section categories' |
    'Card title' |
    'Regular text' |
    'Highlight text'

type Props = React.PropsWithChildren<{
    className?: string
    tag?: React.ElementType
    type: TypographyStyles
}>

function Typography({ className, children, tag, type = 'Regular text' }: Props) {
    const Element = tag || 'p'

    switch (type) {
        case 'Display title':
            className = cn('text-6xl font-medium markazi', className)
            break
        case 'Sub title':
            className = cn('text-4xl markazi', className)
            break
        case 'Lead text':
            className = cn('text-lg font-medium karla', className)
            break
        case 'Section title':
            className = cn('text-xl font-extrabold karla', className)
            break
        case 'Section categories':
            className = cn('text-base font-extrabold karla', className)
            break
        case 'Card title':
            className = cn('text-base font-bold karla', className)
            break
        case 'Highlight text':
            className = cn('text-base font-medium karla', className)
            break
        default:
            className = cn('text-base karla', className)
            break
    }

    return (
        <Element className={className}>{children}</Element>
    )
}

export default Typography