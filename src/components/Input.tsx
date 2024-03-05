import { TextInput, TextInputProps } from "react-native"

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor={'#94a3b8'}
      className="w-full h-14 border border-slate-600 rounded p-4 text-white font-regular text-base"
      {...rest}
    />
  )
}
