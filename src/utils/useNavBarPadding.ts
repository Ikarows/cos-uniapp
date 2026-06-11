import { ref, computed } from 'vue'

export function useNavBarPadding(extra: number = 2) {
  const statusBarHeight = ref(0)
  const navBarHeight = ref(0)
  try {
    const sysInfo = uni.getSystemInfoSync()
    statusBarHeight.value = sysInfo.statusBarHeight || 0
    const menuButton = uni.getMenuButtonBoundingClientRect()
    navBarHeight.value = (menuButton.top - statusBarHeight.value) * 2 + menuButton.height
  } catch (e) {
    statusBarHeight.value = 44
    navBarHeight.value = 48
  }

  const paddingTop = computed(() => statusBarHeight.value + navBarHeight.value + extra + 'px')

  return { paddingTop, statusBarHeight, navBarHeight }
}
