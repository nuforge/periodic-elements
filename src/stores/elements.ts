import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import elementsData from '@/assets/table/PeriodicTableJSON.json'
interface ElementData {
  name: string
  appearance: string | null
  atomic_mass: number
  boil: number | null
  category: string
  density: number | null
  discovered_by: string | null
  melt: number | null
  molar_heat: number | null
  named_by: string | null
  number: number
  period: number
  group: number | null
  phase: string
  source: string
  shells: number[]
  block: string
  [key: string]: any
}
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
  const drawer = ref(false)

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

  // ChatGPT - Add filter and sort functions
  function filterElements(elements: ElementData[], criteria: Partial<ElementData>): ElementData[] {
    return elements.filter((element) =>
      Object.entries(criteria).every(([key, value]) => {
        if (Array.isArray(value)) {
          // For ranges like atomic_mass: [min, max]
          const [min, max] = value
          return element[key] >= min && element[key] <= max
        }
        return element[key] === value
      }),
    )
  }
  function sortElements(
    elements: ElementData[],
    key: keyof ElementData,
    order: 'asc' | 'desc' = 'asc',
  ): ElementData[] {
    return [...elements].sort((a, b) => {
      if (a[key] === null || b[key] === null) return 0
      const valA = a[key] as number
      const valB = b[key] as number
      return order === 'asc' ? valA - valB : valB - valA
    })
  }

  return {
    drawer,
    elements,
    element,
    select,
    selected,
    selectedElements,
    periodicTable,
    filterElements,
    sortElements,
  }
})
