
export const PrimaryButton = ({classNames, title, onClick}: {

  classNames?: string,
  title: string,
  onClick: (() => {}) | undefined | (() => void)
}) => {

  return (
    <button onClick={onClick}
            className={`${classNames}text-white bg-black hover:bg-black/70 focus:bg-black/50 focus:outline-2  px-5 py-2 text-sm border-t-2 border-l-2 border-gray-500`}>
      {title}
    </button>
  )
}