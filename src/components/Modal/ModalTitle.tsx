type ModalContentProps = {
  children: React.ReactNode
}
export const ModalTitle = ({ children }: ModalContentProps) => {
  return (
    <>
      <p className="text-md font-bold text-gray-600">{children}</p>
    </>
  )
}
