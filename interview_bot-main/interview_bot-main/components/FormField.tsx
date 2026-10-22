import React from 'react'

import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, Controller , FieldValues, Path } from 'react-hook-form';

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>; // react-hook-form control object
  name: Path<T>; // name of the field in the form data
  label: string; // label for the form field
  placeholder?: string; // placeholder text for the input
  type?: 'text' | 'email' | 'password' | 'file' // input type, e.g., text, password, email
}

const FormField = ({ control, name, label, placeholder, type ="text"}: FormFieldProps<T>) => (
  <Controller control={control} name={name} render={({ field }) => (

    <FormItem>
      <FormLabel className="label">{label}</FormLabel>
      <FormControl>
        <Input className='input' placeholder={placeholder} type={type} {... field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )} />



)


export default FormField
