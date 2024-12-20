'use client'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

import { Input } from '@/components/ui/input'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { Switch } from '@/components/ui/switch'

export default function DialogDespesa() {
  const [paga, setPaga] = useState<boolean>(true)

  const seta = () => {
    setPaga(!paga)
  }

  const acao = (dataform: FormData) => {
    const primeiro = dataform.get('teste')
    console.log('dados', primeiro)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full" variant="outline">
          <Plus /> NOVA DESPESA
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={acao}>
          <DialogHeader>
            <DialogTitle>Nova despesa</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col">
            <Input
              id="valor"
              name="valor"
              className="col-span-3"
              placeholder="RS 0,00"
            />
            <div className="flex justify-between">
              <span
                className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300 hover:cursor-pointer"
                onClick={() => seta()}
                onKeyUp={() => seta()}
              >
                {paga && <div>Foi paga</div>}
                {!paga && <div>Não foi paga</div>}
              </span>

              <Switch
                id="airplane-mode"
                name="teste"
                checked={paga}
                onCheckedChange={() => seta()}
              />
              {/* <Label className="relative inline-flex cursor-pointer items-center">
                <Input
                  type="checkbox"
                  name="foipaga"
                  className="peer sr-only"
                  value={1}
                  checked={paga}
                  onChange={() => seta()}
                />
                <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800" />
              </Label> */}
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
