import { ReactNode } from 'react'

export enum AppStatus {
  runtime = 'Runtime',
  constructor = 'Constructor',
}

export enum BlockIDs {
  display = 'Display',
  funcPad = 'FuncPad',
  numPad = 'NumPad',
  equal = 'Equal',
  buildPage = 'buildPage',
}

export interface CalcBlocks {
  id: BlockIDs
  node: ReactNode
}
