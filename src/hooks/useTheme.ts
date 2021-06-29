import Colors from 'src/constants/Colors'
import useColorScheme from 'src/hooks/useColorScheme'

const useTheme = () => {
  const theme = useColorScheme()
  return Colors[theme]
}

export const useThemeColor = (
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
  props?: { light?: string; dark?: string },
) => {
  const theme = useColorScheme()

  if (props && props[theme]) {
    return props[theme]
  }
  return Colors[theme][colorName]
}

export default useTheme
