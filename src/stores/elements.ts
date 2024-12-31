import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import elementsData from '@/assets/table/PeriodicTableJSON.json'

interface Element {
  number: number
  symbol: string
  name: string
  atomic_mass: number
  'cpk-hex': string
  // Add other properties as needed
}

export const useElementStore = defineStore('elements', () => {
  const elements = ref(elementsData.elements)
  const selected = ref<string[]>([])

  const periodicTable = ref<{
    elements: Element[]
    byAtomicNumber: { [key: number]: Element }
    bySymbol: { [key: string]: Element }
    byName: { [key: string]: Element }
    byAtomicWeight: Element[]
  }>({
    elements: elementsData.elements as Element[],
    byAtomicNumber: {},
    bySymbol: {},
    byName: {},
    byAtomicWeight: [],
  })

  // Build indexes for quick lookup
  periodicTable.value.elements.forEach((element) => {
    periodicTable.value.byAtomicNumber[element.number] = element
    periodicTable.value.bySymbol[element.symbol.toLowerCase()] = element
    periodicTable.value.byName[element.name.toLowerCase()] = element
    periodicTable.value.byAtomicWeight.push(element)
  })

  const element = computed(() => {
    return elements.value.find((element) => {
      return element.symbol === selected.value[selected.value.length - 1]
    })
  })

  const selectedElements = computed(() => {
    return elements.value.filter((element) => {
      return selected.value.includes(element.symbol)
    })
  })

  const select = (symbol: string) => {
    if (selected.value.includes(symbol)) {
      selected.value = selected.value.filter((s) => s !== symbol)
    } else {
      selected.value = [...selected.value, symbol]
    }
  }

  return { elements, element, select, selected, selectedElements, periodicTable }
})
