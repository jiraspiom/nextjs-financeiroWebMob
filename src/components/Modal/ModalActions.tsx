type ModalContentProps = {
  children: React.ReactNode
}
export const ModalActions = ({ children }: ModalContentProps) => {
  return (
    <>
      <footer className="flex w-full justify-end gap-2  p-3">{children}</footer>
    </>
  )
}
