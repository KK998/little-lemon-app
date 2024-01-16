import cn from '../util/cn'
import colors from '../util/colors'
import Typography from './Typography'

function Input({ name, type = "text", className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn("flex items-center h-10 px-3 font-medium text-base rounded-2xl shadow-xl focus-within:outline-none focus-within:shadow", colors.bg.secondary.white, className)} name={name} type={type} {...props} />
}

function TextArea({ name, className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn("p-3 font-medium text-base rounded-2xl shadow-xl focus-within:outline-none focus-within:shadow", className)} name={name} {...props} />
}

type Props = React.PropsWithChildren<{
  label: string
  name: string
}>

function FormField({ children, label, name }: Props) {
  return (
    <div className='flex flex-col flex-grow gap-2'>
      <Typography tag="label" type="Section categories" className={cn(colors.text.secondary.white)} htmlFor={name}>
        {label}:
      </Typography>
      {children}
    </div>
  )
}

FormField.Input = Input;
FormField.TextArea = TextArea;

export default FormField