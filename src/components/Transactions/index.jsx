import { Button } from "../Button"
import { IconCurrency } from "../icons"
import { TransactionItem } from "../TransactionItem"

const defaultTransactions = [
    {
        id: 1,
        description: "iFood",
        value: -20,
        date: "2024-10-01T00:00:00-03:00"
    },
    {
        id: 2,
        description: "Papelaria Mila",
        value: -80,
        date: "2024-10-03T00:00:00-03:00"
    },
    {
        id: 3,
        description: "Freela (2ª parte)",
        value: 1000,
        date: "2024-10-03T00:00:00-03:00"
    },
    {
        id: 4,
        description: "Magazine Luiza",
        value: -300,
        date: "2024-10-05T00:00:00-03:00"
    }
]

export const Transactions = ({ items = defaultTransactions }) => {
    return (
        <div className="flex flex-col justify-between h-full gap-6">
            <ul className="divide-y divide-neutral-header">
                {items.map((item) => (
                    <TransactionItem key={item.id} item={item} />
                ))}
            </ul>
            <div className="flex justify-center">
                <Button>
                    <IconCurrency /> Adicionar transação
                </Button>
            </div>
        </div>
    )
}
