import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

type Props = TouchableOpacityProps & {
  title: string
}

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="h-12 w-full bg-lime-500 items-center justify-center rounded-md"
      {...rest}
    >
      <Text className="text-slate-800 text-sm font-semiBold uppercase">
        {title}
      </Text>
    </TouchableOpacity>
  )
}
