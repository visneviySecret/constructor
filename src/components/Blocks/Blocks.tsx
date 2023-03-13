import { BlockIDs } from '@/utils/types'
import { Display } from '@/components/Display/Display'
import Equal from '@/components/Equal/Equal'
import FuncPad from '@/components/FuncPad/FuncPad'
import NumPad from '@/components/NumPad/NumPad'

export const Blocks = [
  { id: BlockIDs.display, node: <Display /> },
  { id: BlockIDs.funcPad, node: <FuncPad /> },
  { id: BlockIDs.numPad, node: <NumPad /> },
  { id: BlockIDs.equal, node: <Equal /> },
]
