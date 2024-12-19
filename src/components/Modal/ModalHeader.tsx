type ModalContentProps = {
  children: React.ReactNode
}

export const ModalHeader = ({ children }: ModalContentProps) => {
  return (
    <>
      <header className="bg-slate-200">
        <div className="flex items-center justify-center p-3">{children}</div>
      </header>
    </>
  )
}
