import { ref, type Ref } from 'vue'
import type { BreadcrumbMenu } from '@fewangsit/wangsvue/breadcrumb'

export interface BreadcrumbStore {
  breadcrumbs: Ref<BreadcrumbMenu[]>
  setBreadcrumbs: (breadcrumb: BreadcrumbMenu[]) => void
}

const breadcrumbs = ref<BreadcrumbMenu[]>([])

const useBreadcrumbStore = (): BreadcrumbStore => {
  const setBreadcrumbs = (newBreadcrumb: BreadcrumbMenu[]): void => {
    breadcrumbs.value = newBreadcrumb
  }

  return {
    breadcrumbs,
    setBreadcrumbs
  }
}

export default useBreadcrumbStore
