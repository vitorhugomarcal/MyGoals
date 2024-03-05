import { Pressable, PressableProps, Text } from "react-native"

import { currencyFormat } from "@/utils/currencyFormat"
import { colors } from "@/styles/colors"

export type TransactionProps = {
  date: string
  amount: number
}

type Props = PressableProps & {
  transaction: TransactionProps
}

export function Transaction({ transaction, ...rest }: Props) {
  return (
    <Pressable
      className="w-full h-16 bg-slate-600 rounded-sm border border-slate-500 p-4 flex-row items-center justify-between"
      {...rest}
    >
      <Text
        className="font-regular text-sm"
        style={{
          color: transaction.amount < 0 ? colors.red[500] : '#84cc16',
        }}
      >
        {transaction.amount < 0 ? "- " : "+ "}
        {currencyFormat(transaction.amount).replace("-", "")}
      </Text>

      <Text className="text-slate-300 font-regular text-sm">
        {transaction.date}
      </Text>
    </Pressable>
  )
}
