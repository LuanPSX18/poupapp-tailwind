const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})

export const TransactionItem = ({ item }) => {
    const isIncome = item.value >= 0
    const detailColor = isIncome ? 'text-secondary-income' : 'text-secondary-expense'
    const formattedValue = `${isIncome ? '+' : '-'}${formatter.format(Math.abs(item.value))}`

    return (
        <li className="flex items-start justify-between py-4 first:pt-0 last:pb-0">
            <div className={`flex flex-col gap-2 text-[15px] leading-[120%] ${detailColor}`}>
                <p className="m-0 font-bold">{item.description}</p>
                <p className="m-0">{formattedValue}</p>
            </div>
            <span className="text-neutral-text text-sm leading-[120%]">
                {new Date(item.date).toLocaleDateString('pt-BR')}
            </span>
        </li>
    )
}
