import cn from '../util/cn'
import colors from '../util/colors'
import Typography from './Typography'

function Input({ name, type = "text", className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(`outline-none transition-all flex items-center h-10 px-3 font-medium text-base rounded-2xl shadow-xl focus-within:shadow border border-solid border-secondary-white focus-within:border-primary-green`, colors.bg.secondary.white, colors.text.secondary.black, className)} name={name} type={type} {...props} />
}

function TextArea({ name, className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(`outline-none transition-all p-3 font-medium text-base rounded-2xl shadow-xl focus-within:shadow border border-solid border-secondary-white focus-within:border-primary-green`, colors.bg.secondary.white, colors.text.secondary.black, className)} name={name} {...props} />
}

function Select({ name, className, children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(`outline-none transition-all px-3 h-10 font-medium text-base rounded-2xl shadow-xl focus-within:shadow border border-solid border-secondary-white focus-within:border-primary-green`, colors.bg.secondary.white, colors.text.secondary.black, className)}
      name={name}
      {...props}
    >
      {children}
    </select>
  )
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
FormField.Select = Select;

export default FormField