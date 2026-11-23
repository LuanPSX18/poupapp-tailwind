import { IconBank } from "../icons"

const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})

export const AccountItem = ({ account }) => {
    return (
        <li className="flex items-center justify-between py-4 first:pt-0 last:pb-0 text-neutral-text">
            <div className="flex items-center gap-2 font-bold text-[15px] leading-[120%]">
                <IconBank />
                <span>{account.bank}</span>
            </div>
            <div className="flex flex-col gap-1 text-sm leading-[120%] min-w-[110px]">
                <span className="font-bold">Saldo</span>
                <span>{formatter.format(account.balance)}</span>
            </div>
        </li>
    )
}
