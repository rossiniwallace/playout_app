import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  
  min-height: 56px;
  max-height: 56px;

  background: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GREEN_500: theme.COLORS.RED_500 };

  justify-content: center;
  align-items: center;

  border-radius: 6px;
`

export const Title = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  color: ${({theme}) => theme.COLORS.WHITE};
  text-transform: uppercase;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`