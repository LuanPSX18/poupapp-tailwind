import { AccountItem } from "../AccountItem"
import { Button } from "../Button"
import { IconWallet } from "../icons"

const defaultAccounts = [
    {
        id: 1,
        bank: "Anybank",
        balance: 1200
    },
    {
        id: 2,
        bank: "Bytebank",
        balance: 800
    },
    {
        id: 3,
        bank: "Switch Bank",
        balance: 1800
    }
]

export const Accounts = ({ accounts = defaultAccounts }) => {
    return (
        <div className="flex flex-col justify-between h-full gap-6">
            <ul className="divide-y divide-neutral-header">
                {accounts.map((account) => (
                    <AccountItem key={account.id} account={account} />
                ))}
            </ul>
            <div className="flex justify-center">
                <Button>
                    <IconWallet /> Adicionar conta
                </Button>
            </div>
        </div>
    )
}
