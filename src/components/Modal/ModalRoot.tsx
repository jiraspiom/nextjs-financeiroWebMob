type ModalProps = {
  isOpen: boolean
  children: React.ReactNode
}

export const ModalRoot = ({ isOpen, children }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-25 text-gray-700">
          <div className="flex h-full w-full items-center justify-center">
            <div className="shawdow-2xl absolute z-50 mx-auto my-0 flex h-80 w-[480px] flex-col overflow-hidden rounded-xl bg-slate-800">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
