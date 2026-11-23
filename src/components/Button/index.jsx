export const Button = ({ children, className = '', ...props }) => {
    return (
        <button
            type="button"
            className={`bg-transparent border border-neutral-text text-neutral-text px-6 py-3 rounded-full flex items-center justify-center gap-2 text-base font-medium leading-[120%] cursor-pointer hover:bg-neutral-header transition-colors ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
